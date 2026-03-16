import React from 'react';
import { CartItem } from './CartItem.jsx';

export function Cart({ isOpen, onClose, cart, total, itemCount, onIncrease, onDecrease, onRemove }) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40 animate-fade-in md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col animate-slide-in-right"
        role="dialog"
        aria-label="Carrinho de compras"
      >
        <div className="flex items-center justify-between p-4 border-b border-crust-200">
          <h2 className="text-lg font-bold text-crust-900">Carrinho</h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-crust-100 text-crust-700"
            aria-label="Fechar carrinho"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <p className="text-crust-500 text-center py-8">Seu carrinho está vazio.</p>
          ) : (
            cart.map((entry) => (
              <CartItem
                key={entry.item.id}
                entry={entry}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onRemove={onRemove}
              />
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="p-4 border-t border-crust-200 bg-crust-50">
            <div className="flex justify-between text-lg font-bold text-crust-900 mb-3">
              <span>Total ({itemCount} {itemCount === 1 ? 'item' : 'itens'})</span>
              <span>R$ {total.toFixed(2).replace('.', ',')}</span>
            </div>
            <button
              type="button"
              className="w-full py-3 bg-pizza-500 text-white font-semibold rounded-lg hover:bg-pizza-600 transition-colors"
            >
              Finalizar pedido (demo)
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
