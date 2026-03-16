import React from 'react';

export function CartItem({ entry, onIncrease, onDecrease, onRemove }) {
  const { item, quantity } = entry;

  return (
    <div className="flex gap-3 py-3 border-b border-crust-200 last:border-0">
      <div className="w-14 h-14 rounded-lg overflow-hidden bg-crust-100 shrink-0">
        <img
          src={item.imagem}
          alt={item.nome}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-crust-900 truncate">{item.nome}</h4>
        <p className="text-sm text-crust-600">
          R$ {item.preço.toFixed(2).replace('.', ',')} × {quantity}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <button
            type="button"
            onClick={() => onDecrease(item.id)}
            className="w-7 h-7 rounded bg-crust-200 text-crust-800 font-medium hover:bg-crust-300"
            aria-label="Diminuir quantidade"
          >
            −
          </button>
          <span className="text-sm font-medium w-6 text-center">{quantity}</span>
          <button
            type="button"
            onClick={() => onIncrease(item.id)}
            className="w-7 h-7 rounded bg-pizza-500 text-white font-medium hover:bg-pizza-600"
            aria-label="Aumentar quantidade"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => onRemove(item.id)}
            className="ml-2 text-sm text-red-600 hover:underline"
          >
            Remover
          </button>
        </div>
      </div>
      <div className="text-right shrink-0">
        <span className="font-semibold text-crust-900">
          R$ {(item.preço * quantity).toFixed(2).replace('.', ',')}
        </span>
      </div>
    </div>
  );
}
