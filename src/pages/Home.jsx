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
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header com Glassmorphism */}
      <header className="sticky top-0 z-30 glass transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-pizza-500 uppercase tracking-widest leading-none">Bem-vindo à</span>
            <h1 className="text-2xl font-bold text-crust-950 tracking-tight">
              {pizzeriaName}
            </h1>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Botão do Carrinho - Desktop e Mobile */}
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="group relative p-3 rounded-2xl bg-white shadow-sm border border-crust-100 hover:border-pizza-200 transition-all active:scale-95"
              aria-label="Abrir carrinho"
            >
              <svg className="w-6 h-6 text-crust-800 group-hover:text-pizza-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-pizza-500 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
                  {itemCount > 99 ? '99+' : itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="max-w-6xl mx-auto px-6 py-8 pb-32">
        <div className="mb-8 page-transition">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-1 w-8 bg-pizza-500 rounded-full"></div>
            <span className="text-sm font-bold text-pizza-500 tracking-wide uppercase">Destaques do dia</span>
          </div>
          <h2 className="text-3xl font-extrabold text-crust-950 tracking-tight">Explore nosso <br/>Cardápio Especial</h2>
        </div>
        
        <div className="page-transition" style={{ animationDelay: '0.1s' }}>
          <Menu onAddToOrder={addItem} />
        </div>
      </main>

      {/* Bottom Navigation (App-like feel) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-40 md:hidden">
        <nav className="glass rounded-[2rem] px-4 py-3 flex items-center justify-around shadow-2xl border-white/40">
          <button className="flex flex-col items-center gap-1 text-pizza-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"/></svg>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Início</span>
          </button>
          <button onClick={() => setCartOpen(true)} className="flex flex-col items-center gap-1 text-crust-400 hover:text-pizza-500 transition-colors">
            <div className="relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
              {itemCount > 0 && <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-pizza-500 rounded-full border-2 border-white"></div>}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Pedido</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-crust-400 hover:text-pizza-500 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Perfil</span>
          </button>
        </nav>
      </div>

      {/* Sidebar/Modal de pedidos */}
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

      {/* Widget do Chat reformulado */}
      <ChatWidget
        messages={messages}
        isLoading={isLoading}
        sendMessage={sendMessage}
        messagesEndRef={messagesEndRef}
      />
    </div>
  );
}
