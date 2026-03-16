import { useState, useMemo } from 'react';
import { CATEGORIES, menuItems } from '../../data/menuData.js';
import CategoryTabs from '../CategoryTabs/CategoryTabs.jsx';
import MenuItemCard from '../MenuItemCard/MenuItemCard.jsx';

function Menu({ onAddToOrder }) {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

  const itemsByCategory = useMemo(() => {
    return menuItems.filter((item) => item.categoria === activeCategory);
  }, [activeCategory]);

  return (
    <section className="animate-fade-in">
      <CategoryTabs
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {itemsByCategory.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            onAddToOrder={onAddToOrder}
          />
        ))}
      </div>
    </section>
  );
}

export default Menu;
