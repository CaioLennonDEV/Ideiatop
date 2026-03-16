import { useState, useCallback, useRef, useEffect } from 'react';
import { sendMessageToAi } from '../services/aiService.js';

const INITIAL_MESSAGE = {
  role: 'assistant',
  content: 'Olá! Sou o assistente da pizzaria. Posso recomendar pizzas, sugerir combinações e tirar dúvidas sobre o cardápio. Como posso ajudar?',
};

export function useChat() {
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const sendMessage = useCallback(async (userContent) => {
    const trimmed = (userContent || '').trim();
    if (!trimmed) return;

    const userMessage = { role: 'user', content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const { reply } = await sendMessageToAi(trimmed);
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      const errorMsg = err.message || 'Não foi possível obter resposta. Tente novamente.';
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: `Erro: ${errorMsg}` },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    messages,
    isLoading,
    sendMessage,
    messagesEndRef,
  };
}
