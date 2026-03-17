import React from 'react';

export function MenuItemCard({ item, onAddToOrder }) {
  return (
    <article
      className="group bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col border border-crust-100/50 hover:border-pizza-200"
      data-testid={`menu-item-${item.id}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.imagem}
          alt={item.nome}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute top-3 right-3">
          <div className="glass-dark px-2 py-1 rounded-lg text-[10px] font-bold text-white uppercase tracking-wider">
            {item.categoria}
          </div>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-crust-950 text-base leading-tight group-hover:text-pizza-600 transition-colors">
            {item.nome}
          </h3>
        </div>
        
        <p className="text-crust-500 text-xs mt-1 flex-1 line-clamp-2 leading-relaxed">
          {item.descrição}
        </p>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-crust-400 font-bold uppercase tracking-tighter">Preço</span>
            <span className="font-extrabold text-crust-950 text-lg">
              R$ {item.preço.toFixed(2).replace('.', ',')}
            </span>
          </div>
          
          <button
            type="button"
            onClick={() => onAddToOrder(item)}
            className="flex items-center justify-center w-10 h-10 bg-pizza-500 text-white rounded-2xl hover:bg-pizza-600 active:scale-90 transition-all shadow-lg shadow-pizza-200"
            aria-label={`Adicionar ${item.nome} ao pedido`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
