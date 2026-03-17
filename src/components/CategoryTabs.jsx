export function CategoryTabs({ categories, activeCategory, onSelect }) {
  return (
    <nav
      className="flex gap-2 overflow-x-auto pb-4 pt-2 -mx-2 px-2 mask-linear-fade scroll-smooth"
      role="tablist"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
    >
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          role="tab"
          aria-selected={activeCategory === cat}
          onClick={() => onSelect(cat)}
          className={`
            shrink-0 px-6 py-3 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all duration-300 active:scale-90
            ${activeCategory === cat
              ? 'bg-pizza-500 text-white shadow-lg shadow-pizza-200'
              : 'bg-white text-crust-500 hover:text-crust-900 border border-crust-100'
            }
          `}
        >
          {cat}
        </button>
      ))}
    </nav>
  );
}
