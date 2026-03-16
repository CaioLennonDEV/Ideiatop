function MenuItemCard({ item, onAddToOrder }) {
  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in">
      <div className="aspect-[4/3] bg-crust-100 overflow-hidden">
        <img
          src={item.imagem}
          alt={item.nome}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-crust-900 text-lg mb-1">{item.nome}</h3>
        <p className="text-crust-600 text-sm mb-3 line-clamp-2">{item.descrição}</p>
        <div className="flex items-center justify-between gap-2">
          <span className="text-pizza-600 font-bold text-lg">
            R$ {item.preço.toFixed(2).replace('.', ',')}
          </span>
          <button
            type="button"
            onClick={() => onAddToOrder(item)}
            className="px-4 py-2 bg-pizza-500 text-white text-sm font-semibold rounded-xl hover:bg-pizza-600 active:scale-95 transition-all"
          >
            Adicionar
          </button>
        </div>
      </div>
    </article>
  );
}

export default MenuItemCard;
