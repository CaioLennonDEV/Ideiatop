import React, { useState } from 'react';
import { Menu } from '../components/Menu.jsx';
import { Cart } from '../components/Cart.jsx';
import { ChatWidget } from '../components/ChatWidget.jsx';
import { useCart } from '../hooks/useCart.js';
import { useChat } from '../hooks/useChat.js';

const pizzeriaName = import.meta.env.VITE_PIZZERIA_NAME || 'Pizzaria';

export function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const {
    cart,
    addItem,
    total,
    itemCount,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useCart();
  const { messages, isLoading, sendMessage, messagesEndRef } = useChat();

  return (
    <div className="min-h-screen bg-crust-50">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-crust-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold text-crust-900 truncate">
            {pizzeriaName}
          </h1>
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="relative p-2.5 rounded-xl bg-pizza-500 text-white hover:bg-pizza-600 transition-colors"
            aria-label="Abrir carrinho"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">
                {itemCount > 99 ? '99+' : itemCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="max-w-6xl mx-auto px-4 py-6 pb-24 md:pb-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-crust-900">Cardápio</h2>
          <p className="text-crust-600 mt-1">Escolha suas delícias</p>
        </div>
        <Menu onAddToOrder={addItem} />
      </main>

      {/* Carrinho (sidebar/modal) */}
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        total={total}
        itemCount={itemCount}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onRemove={removeItem}
      />

      {/* Chat flutuante */}
      <ChatWidget
        messages={messages}
        isLoading={isLoading}
        sendMessage={sendMessage}
        messagesEndRef={messagesEndRef}
      />
    </div>
  );
}
