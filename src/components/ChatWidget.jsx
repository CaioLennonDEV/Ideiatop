import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage.jsx';

export function ChatWidget({ messages, isLoading, sendMessage, messagesEndRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = inputValue.trim();
    if (!text || isLoading) return;
    sendMessage(text);
    setInputValue('');
  };

  return (
    <>
      {/* Botão flutuante */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-pizza-500 text-white shadow-lg hover:bg-pizza-600 flex items-center justify-center z-30 transition-transform hover:scale-105"
        aria-label={isOpen ? 'Fechar chat' : 'Abrir chat'}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Painel do chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[calc(100vw-3rem)] max-w-md h-[min(70vh,420px)] bg-white rounded-2xl shadow-xl border border-crust-200 flex flex-col z-30 animate-slide-up">
          <div className="p-3 border-b border-crust-200 bg-pizza-500 rounded-t-2xl">
            <h3 className="font-semibold text-white">Assistente da Pizzaria</h3>
            <p className="text-pizza-100 text-xs">Dúvidas e sugestões</p>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, i) => (
              <ChatMessage key={i} message={msg} />
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-crust-100 rounded-2xl rounded-bl-md px-4 py-2.5">
                  <span className="inline-flex gap-1">
                    <span className="w-2 h-2 bg-crust-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-crust-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-crust-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="p-3 border-t border-crust-200">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="flex-1 px-4 py-2.5 border border-crust-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pizza-400"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="px-4 py-2.5 bg-pizza-500 text-white rounded-xl font-medium disabled:opacity-50 hover:bg-pizza-600 transition-colors"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
