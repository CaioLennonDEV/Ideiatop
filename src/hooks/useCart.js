import { useState, useCallback } from 'react';

/**
 * Item no carrinho: { item, quantity } onde item vem do menuData
 */
function getInitialCart() {
  try {
    const saved = localStorage.getItem('pizzaria-cart');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (_) {}
  return [];
}

function saveCart(cart) {
  try {
    localStorage.setItem('pizzaria-cart', JSON.stringify(cart));
  } catch (_) {}
}

export function useCart() {
  const [cart, setCart] = useState(getInitialCart);

  const persist = useCallback((newCart) => {
    setCart(newCart);
    saveCart(newCart);
  }, []);

  const addItem = useCallback(
    (item, quantity = 1) => {
      const existing = cart.find((c) => c.item.id === item.id);
      let newCart;
      if (existing) {
        newCart = cart.map((c) =>
          c.item.id === item.id ? { ...c, quantity: c.quantity + quantity } : c
        );
      } else {
        newCart = [...cart, { item, quantity }];
      }
      persist(newCart);
    },
    [cart, persist]
  );

  const removeItem = useCallback(
    (itemId) => {
      persist(cart.filter((c) => c.item.id !== itemId));
    },
    [cart, persist]
  );

  const updateQuantity = useCallback(
    (itemId, delta) => {
      const entry = cart.find((c) => c.item.id === itemId);
      if (!entry) return;
      const newQty = Math.max(0, entry.quantity + delta);
      if (newQty === 0) {
        persist(cart.filter((c) => c.item.id !== itemId));
      } else {
        persist(
          cart.map((c) =>
            c.item.id === itemId ? { ...c, quantity: newQty } : c
          )
        );
      }
    },
    [cart, persist]
  );

  const increaseQuantity = useCallback(
    (itemId) => updateQuantity(itemId, 1),
    [updateQuantity]
  );

  const decreaseQuantity = useCallback(
    (itemId) => updateQuantity(itemId, -1),
    [updateQuantity]
  );

  const total = cart.reduce(
    (acc, { item, quantity }) => acc + item.preço * quantity,
    0
  );

  const itemCount = cart.reduce((acc, { quantity }) => acc + quantity, 0);

  const clearCart = useCallback(() => persist([]), [persist]);

  return {
    cart,
    addItem,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    updateQuantity,
    total,
    itemCount,
    clearCart,
  };
}
