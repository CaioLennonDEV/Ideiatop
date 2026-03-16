import React from 'react';

export function ChatMessage({ message }) {
  const isUser = message.role === 'user';

  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-slide-up`}
    >
      <div
        className={`
          max-w-[85%] rounded-2xl px-4 py-2.5 text-sm
          ${isUser
            ? 'bg-pizza-500 text-white rounded-br-md'
            : 'bg-crust-100 text-crust-900 rounded-bl-md'
          }
        `}
      >
        <p className="whitespace-pre-wrap break-words">{message.content}</p>
      </div>
    </div>
  );
}
