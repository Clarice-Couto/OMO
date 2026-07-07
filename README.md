# 🧺 Campanha OMO Herança 2026

Uma landing page promocional ultra-interativa, responsiva e de alta fidelidade desenvolvida para a campanha **OMO Herança 2026**. O projeto destaca a tradição e o carinho intergeracional associados à marca OMO, com foco no lançamento da linha Herança e na ativação da comunidade por meio do envio de histórias de cuidado.

---

## ✨ Recursos Principais

### 1. Hero Section Comercial
*   Apresentação visual com imagens em alta definição da campanha (`OMO-amplia-...`).
*   Efeito parallax sutil no scroll e animações suaves na flutuação dos cards.
*   Call-to-Action (CTA) dinâmico direcionando o usuário para a área de cadastro e portfólio.

### 2. Hub de Dicas de Cuidado OMO (Bento Grid Assimétrico)
*   **Layout Apple-Style**: Bento Grid minimalista e assimétrico para apresentação das dicas práticas de cuidado pós-lavagem (Diluição, Secagem Inteligente e Organização).
*   **Micro-interações Elásticas**: Transições e efeitos hover controlados via Framer Motion, gerando feedback tátil premium.
*   **Integração com Cleanipedia**: Links reais que guiam o usuário a artigos completos sobre cada tópico de cuidado.

### 3. Formulário de Cadastro em 3 Passos (Campanha de Histórias)
*   **Fluxo Linear Animado**: Divisão lógica em 3 etapas consecutivas (Identificação ➔ Detalhes & Nota Fiscal ➔ Envio da História).
*   **Conformidade Legal (LGPD & SEAE)**:
    *   Validação jurídica completa com consentimento explícito.
    *   Filtro obrigatório de idade (maiores de 18 anos).
*   **Máscaras em Tempo Real**: Formatação instantânea de campos sensíveis como CPF (`999.999.999-99`) e Celular (`(99) 99999-9999`).
*   **Upload de Comprovante**: Interface drag-and-drop para notas fiscais de compra com feedback visual do arquivo selecionado.
*   **Efeito Confete**: Comemoração visual com animação física de confetes no sucesso do envio.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as melhores práticas modernas do ecossistema Frontend:

*   **Core**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
*   **Ferramenta de Build**: [Vite](https://vite.dev/) (Compilação e HMR ultrarrápidos)
*   **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/) (Classes utilitárias de alta performance via plugin nativo do Vite)
*   **Motion Design & Animações**: [Framer Motion](https://www.framer.com/motion/) (Efeitos de mola físicos e transições fluidas)
*   **Ícones**: [Lucide React](https://lucide.dev/) (Ícones vetoriais modernos e consistentes)
*   **Gerenciador de Pacotes**: [pnpm](https://pnpm.io/)

---

## 📂 Estrutura do Projeto

```text
├── src/
│   ├── components/            # Componentes estruturados da UI
│   │   ├── CareHub.tsx        # Bento Grid do Hub de Dicas
│   │   ├── Hero.tsx           # Seção de apresentação e destaque inicial
│   │   ├── OriginSection.tsx  # Seção histórica da marca (Old Mother Owl)
│   │   ├── PromoCard.tsx      # Formulário de cadastro de código/história em 3 passos
│   │   ├── ProductsPage.tsx   # Página interna do catálogo de produtos
│   │   ├── RegulationPage.tsx # Página de termos de uso e regulamento oficial
│   │   └── Footer.tsx         # Rodapé global integrado
│   ├── imports/               # Imagens locais e assets estáticos da campanha
│   ├── App.tsx                # Gerenciamento de rotas/abas do app
│   ├── main.tsx               # Ponto de entrada do React
│   └── index.css              # Estilos globais e injeção do Tailwind CSS v4
├── public/                    # Assets públicos globais (robots.txt, etc)
├── package.json               # Dependências e scripts npm
└── vite.config.ts             # Configurações do Vite
```

---

## 🚀 Como Iniciar Localmente

Certifique-se de possuir o [Node.js](https://nodejs.org/) instalado em sua máquina. Recomendamos usar o gerenciador de pacotes **pnpm**.

1.  **Clonar o repositório** e entrar no diretório:
    ```bash
    git clone <url-do-repositorio>
    cd <nome-do-repositorio>
    ```

2.  **Instalar as dependências**:
    ```bash
    pnpm install
    ```

3.  **Iniciar o servidor de desenvolvimento**:
    ```bash
    pnpm dev
    ```
    *O projeto estará disponível em `http://localhost:8443` (ou na porta configurada pelo Vite).*

4.  **Gerar o build de produção**:
    ```bash
    pnpm build
    ```
    *Os arquivos finais otimizados serão gerados na pasta `/dist`.*

---

*Direitos de desenvolvimento: Clarice Couto*
