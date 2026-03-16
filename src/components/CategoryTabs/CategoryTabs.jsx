function CategoryTabs({ categories, activeCategory, onSelect }) {
  return (
    <nav className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-pizza-200 scrollbar-track-transparent" aria-label="Categorias do cardápio">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onSelect(cat)}
          className={`
            flex-shrink-0 px-4 py-2.5 rounded-xl font-medium text-sm transition-all
            ${activeCategory === cat
              ? 'bg-pizza-500 text-white shadow-md'
              : 'bg-crust-100 text-crust-700 hover:bg-crust-200'
            }
          `}
        >
          {cat}
        </button>
      ))}
    </nav>
  );
}

export default CategoryTabs;
