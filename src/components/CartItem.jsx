import React from 'react';

export function CartItem({ entry, onIncrease, onDecrease, onRemove }) {
  const { item, quantity } = entry;

  return (
    <div className="flex gap-4 py-4 bg-white rounded-2xl px-4 border border-crust-100 shadow-sm transition-all hover:border-pizza-100">
      <div className="w-16 h-16 rounded-xl overflow-hidden bg-crust-50 shrink-0">
        <img
          src={item.imagem}
          alt={item.nome}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <h4 className="font-bold text-crust-950 truncate text-sm">{item.nome}</h4>
          <p className="text-[10px] text-crust-500 font-bold uppercase tracking-tighter">
            R$ {item.preço.toFixed(2).replace('.', ',')} cada
          </p>
        </div>
        
        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center bg-crust-50 rounded-lg p-1 border border-crust-100">
            <button
              type="button"
              onClick={() => onDecrease(item.id)}
              className="w-6 h-6 rounded-md bg-white text-crust-600 shadow-sm flex items-center justify-center hover:bg-pizza-50 transition-colors active:scale-90"
              aria-label="Diminuir"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4"/></svg>
            </button>
            <span className="text-xs font-bold w-6 text-center text-crust-900">{quantity}</span>
            <button
              type="button"
              onClick={() => onIncrease(item.id)}
              className="w-6 h-6 rounded-md bg-pizza-500 text-white shadow-sm flex items-center justify-center hover:bg-pizza-600 transition-colors active:scale-90"
              aria-label="Aumentar"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4"/></svg>
            </button>
          </div>
          
          <button
            type="button"
            onClick={() => onRemove(item.id)}
            className="text-[10px] font-bold text-red-400 uppercase tracking-widest hover:text-red-600 transition-colors"
          >
            Remover
          </button>
        </div>
      </div>
      <div className="text-right shrink-0">
        <span className="font-extrabold text-crust-950 text-base">
          R$ {(item.preço * quantity).toFixed(2).replace('.', ',')}
        </span>
      </div>
    </div>
  );
}
