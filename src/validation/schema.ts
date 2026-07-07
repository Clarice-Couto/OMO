import { z } from 'zod';

// Basic XSS sanitization helper to escape HTML tags
const sanitizeString = (val: string) => {
  return val
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

export const userRegistrationSchema = z.object({
  fullName: z.string()
    .min(3, "Nome completo deve ter pelo menos 3 caracteres")
    .transform(sanitizeString),
  email: z.string()
    .email("E-mail inválido")
    .transform(sanitizeString),
  cpf: z.string()
    .regex(/^\d{11}$/, "CPF deve conter exatamente 11 dígitos numéricos"),
  phone: z.string()
    .regex(/^\d{10,11}$/, "Telefone deve conter entre 10 e 11 dígitos numéricos"),
  termsAccepted: z.literal(true, {
    message: "Você deve aceitar os termos da promoção"
  })
});

export const invoiceValidationSchema = z.object({
  invoiceKey: z.string()
    .length(44, "A chave de acesso da nota fiscal deve conter exatamente 44 caracteres numéricos")
    .regex(/^\d+$/, "A chave de acesso deve conter apenas números")
});

export const storyValidationSchema = z.object({
  story: z.string()
    .min(20, "A história deve conter pelo menos 20 caracteres")
    .transform(sanitizeString)
});

// Combined schema for complete database submission
export const completeParticipationSchema = userRegistrationSchema
  .merge(invoiceValidationSchema)
  .merge(storyValidationSchema);
