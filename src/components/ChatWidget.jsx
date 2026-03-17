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
      {/* Botão flutuante - Oculto em mobile se o Bottom Nav for prioridade, mas aqui vamos mantê-lo elegante */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`fixed bottom-24 right-6 md:bottom-8 md:right-8 w-14 h-14 rounded-2xl md:rounded-full bg-pizza-500 text-white shadow-2xl flex items-center justify-center z-30 transition-all duration-300 active:scale-90 ${isOpen ? 'rotate-90' : ''}`}
        aria-label={isOpen ? 'Fechar chat' : 'Abrir chat'}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Painel do chat */}
      {isOpen && (
        <div className="fixed bottom-[110px] right-6 md:bottom-28 md:right-8 w-[calc(100vw-3rem)] max-w-sm h-[min(65vh,480px)] bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-crust-100 flex flex-col z-30 animate-slide-up overflow-hidden">
          <div className="px-6 py-4 glass-dark bg-pizza-500 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <span className="text-lg">🍕</span>
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">Chef Virtual</h3>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-pizza-100 text-[10px] font-medium">Online para te ajudar</p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
            {messages.map((msg, i) => (
              <ChatMessage key={i} message={msg} />
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-crust-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                  <span className="inline-flex gap-1.5">
                    <span className="w-2 h-2 bg-pizza-200 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-pizza-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
                    <span className="w-2 h-2 bg-pizza-200 rounded-full animate-bounce" style={{ animationDelay: '400ms' }} />
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-crust-100">
            <div className="flex items-center gap-2 bg-crust-50 rounded-2xl px-2 py-1.5 border border-crust-100 focus-within:ring-2 focus-within:ring-pizza-200 focus-within:border-pizza-300 transition-all">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Como posso ajudar?"
                className="flex-1 bg-transparent px-3 py-1.5 text-sm focus:outline-none text-crust-900"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="w-10 h-10 bg-pizza-500 text-white rounded-xl flex items-center justify-center disabled:opacity-40 hover:bg-pizza-600 transition-all shadow-md active:scale-90"
              >
                <svg className="w-5 h-5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}

    </>
  );
}
