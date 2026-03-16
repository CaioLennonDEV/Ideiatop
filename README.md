# Pizzaria - Cardápio Online

Aplicação frontend em React (Vite) para cardápio de pizzaria, com carrinho e assistente de IA via webhook.

## Tecnologias

- React 18 + Vite
- JavaScript
- TailwindCSS
- Layout mobile-first

## Como rodar

```bash
npm install
npm run dev
```

## Configuração (.env)

Crie um arquivo `.env` na raiz (ou use o `.env.example` como base):

```env
VITE_AI_WEBHOOK_URL=https://seu-webhook.com/chat
VITE_PIZZERIA_NAME=Pizzaria Bella Napoli
```

- **VITE_AI_WEBHOOK_URL**: URL que recebe POST com `{ "message": "...", "context": "..." }` e responde `{ "reply": "..." }`.
- **VITE_PIZZERIA_NAME**: Nome exibido no header e no contexto da IA.

## Estrutura

- `src/components` – Menu, Cart, Chat e subcomponentes
- `src/data/menuData.js` – Cardápio mockado (categorias e itens)
- `src/hooks` – useCart, useChat
- `src/services` – aiService (webhook), contextBuilder (contexto da IA)
- `src/pages` – Home

Sem backend: carrinho e cardápio são apenas frontend; a IA depende do webhook configurado.
