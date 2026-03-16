import { menuItems, CATEGORIES } from '../data/menuData.js';

/**
 * Monta o contexto da IA dinamicamente a partir do nome da pizzaria e do cardápio.
 * @returns {string} Contexto formatado para envio ao webhook da IA
 */
export function buildAiContext() {
  const pizzeriaName = import.meta.env.VITE_PIZZERIA_NAME || 'Nossa Pizzaria';

  const byCategory = {};
  CATEGORIES.forEach((cat) => {
    byCategory[cat] = menuItems
      .filter((item) => item.categoria === cat)
      .map((item) => `${item.nome} (R$ ${item.preço.toFixed(2).replace('.', ',')})`);
  });

  let menuText = '';
  CATEGORIES.forEach((cat) => {
    menuText += `\n${cat.toUpperCase()}:\n`;
    (byCategory[cat] || []).forEach((line) => {
      menuText += `- ${line}\n`;
    });
  });

  return `Você é o assistente virtual da pizzaria ${pizzeriaName}.

Ajude os clientes a escolher pizzas, bebidas, sobremesas e pratos.

Este é o cardápio disponível:
${menuText}

Sugira combinações e ajude o cliente a escolher. Seja cordial e objetivo.`;
}
