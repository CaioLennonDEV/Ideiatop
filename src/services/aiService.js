import { buildAiContext } from './contextBuilder.js';

const WEBHOOK_URL = import.meta.env.VITE_AI_WEBHOOK_URL;

/**
 * Em desenvolvimento, usa o proxy do Vite para evitar CORS.
 * O proxy redireciona /api/ai-webhook para a URL do webhook.
 */
const getRequestUrl = () => {
  if (!WEBHOOK_URL || !WEBHOOK_URL.trim()) return '';
  
  // Usamos o proxy /api/ai-webhook tanto em desenvolvimento quanto em produção.
  // Em produção (Render), o servidor Vite Preview ou Redirects devem tratar o redirecionamento
  // para evitar problemas de CORS/headers duplicados vindos do servidor n8n.
  return '/api/ai-webhook';
};

/**
 * Envia mensagem do usuário para o webhook da IA e retorna a resposta.
 * @param {string} message - Mensagem do usuário
 * @returns {Promise<{ reply: string }>} Resposta da IA
 */
export async function sendMessageToAi(message) {
  const requestUrl = getRequestUrl();
  if (!requestUrl) {
    return {
      reply: 'O assistente não está configurado. Configure VITE_AI_WEBHOOK_URL no arquivo .env para conectar à IA.',
    };
  }

  const context = buildAiContext();

  const response = await fetch(requestUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: message.trim(),
      context,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erro ao falar com a IA: ${response.status} - ${errorText}`);
  }

  const data = await response.json();

  // API pode retornar "output" (n8n) ou "reply"
  const text = data.output ?? data.reply;
  if (text === undefined) {
    throw new Error('Resposta da IA inválida: esperado campo "output" ou "reply".');
  }

  return { reply: String(text) };
}
