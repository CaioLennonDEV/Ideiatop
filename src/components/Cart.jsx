import React from 'react';
import { CartItem } from './CartItem.jsx';

export function Cart({ isOpen, onClose, cart, total, itemCount, onIncrease, onDecrease, onRemove }) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className="fixed top-0 right-0 h-full w-full max-w-sm bg-[#fafafa] shadow-[0_0_50px_rgba(0,0,0,0.3)] z-[60] flex flex-col animate-slide-in-right transform transition-transform"
        role="dialog"
        aria-label="Carrinho de compras"
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-crust-100 bg-white">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-extrabold text-crust-950 tracking-tight">Meu Pedido</h2>
            <span className="px-2 py-0.5 bg-pizza-100 text-pizza-600 rounded-full text-[10px] font-bold uppercase tracking-wider">{itemCount} Itens</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-crust-50 text-crust-600 flex items-center justify-center hover:bg-crust-100 transition-colors"
            aria-label="Fechar carrinho"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-crust-50 flex items-center justify-center text-3xl">🍕</div>
              <div>
                <p className="text-crust-900 font-bold">Seu carrinho está vazio</p>
                <p className="text-crust-500 text-sm mt-1">Que tal adicionar uma pizza deliciosa agora?</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4 pb-4">
              {cart.map((entry) => (
                <CartItem
                  key={entry.item.id}
                  entry={entry}
                  onIncrease={onIncrease}
                  onDecrease={onDecrease}
                  onRemove={onRemove}
                />
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 bg-white border-t border-crust-100 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
            <div className="flex justify-between items-center mb-6">
              <span className="text-crust-500 font-medium">Total do pedido</span>
              <span className="text-2xl font-extrabold text-crust-950 tracking-tight">R$ {total.toFixed(2).replace('.', ',')}</span>
            </div>
            
            <button
              type="button"
              className="w-full py-4 bg-pizza-500 text-white font-bold rounded-2xl shadow-xl shadow-pizza-200 hover:bg-pizza-600 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>Confirmar Pedido</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <p className="text-[10px] text-crust-400 text-center mt-4 font-bold uppercase tracking-widest">Entrega expressa em 30-40 min</p>
          </div>
        )}
      </aside>
    </>
  );
}
