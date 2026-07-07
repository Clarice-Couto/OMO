-- DDL para atualização da tabela de participantes no Render (PostgreSQL)

-- Adiciona novas colunas de contato e termos legais se elas não existirem
ALTER TABLE participantes 
  ADD COLUMN IF NOT EXISTS email VARCHAR(255) NOT NULL,
  ADD COLUMN IF NOT EXISTS telefone VARCHAR(20) NOT NULL,
  ADD COLUMN IF NOT EXISTS aceitou_termos BOOLEAN NOT NULL DEFAULT FALSE;

-- Garante que a chave da nota fiscal (chave_nota) seja UNIQUE
ALTER TABLE participantes 
  ADD CONSTRAINT uq_chave_nota UNIQUE (chave_nota);
