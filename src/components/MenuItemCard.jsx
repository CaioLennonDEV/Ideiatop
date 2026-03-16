import React from 'react';

export function MenuItemCard({ item, onAddToOrder }) {
  return (
    <article
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in flex flex-col"
      data-testid={`menu-item-${item.id}`}
    >
      <div className="aspect-[4/3] bg-crust-100 overflow-hidden">
        <img
          src={item.imagem}
          alt={item.nome}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-crust-900 text-lg">{item.nome}</h3>
        <p className="text-crust-600 text-sm mt-1 flex-1 line-clamp-2">
          {item.descrição}
        </p>
        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="font-bold text-pizza-600 text-lg">
            R$ {item.preço.toFixed(2).replace('.', ',')}
          </span>
          <button
            type="button"
            onClick={() => onAddToOrder(item)}
            className="px-4 py-2 bg-pizza-500 text-white text-sm font-medium rounded-lg hover:bg-pizza-600 active:bg-pizza-700 transition-colors"
          >
            Adicionar
          </button>
        </div>
      </div>
    </article>
  );
}
