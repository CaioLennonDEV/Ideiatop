import React from 'react';

export function CategoryTabs({ categories, activeCategory, onSelect }) {
  return (
    <nav
      className="flex gap-1 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-pizza-200 scrollbar-track-transparent"
      role="tablist"
    >
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          role="tab"
          aria-selected={activeCategory === cat}
          onClick={() => onSelect(cat)}
          className={`
            shrink-0 px-4 py-2.5 rounded-lg font-medium text-sm transition-colors
            ${activeCategory === cat
              ? 'bg-pizza-500 text-white shadow'
              : 'bg-crust-100 text-crust-800 hover:bg-crust-200'
            }
          `}
        >
          {cat}
        </button>
      ))}
    </nav>
  );
}
