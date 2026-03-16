const unsplash = (id, w = 400, h = 300) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop`;

export const CATEGORIES = ['Pizzas', 'Pratos', 'Sobremesas', 'Bebidas'];

export const menuItems = [
  // PIZZAS (10+ itens)
  { id: 1, nome: 'Margherita', descrição: 'Molho de tomate, mussarela, manjericão fresco e azeite', preço: 45.90, imagem: unsplash('1574071318508-1cdbab80d002'), categoria: 'Pizzas' },
  { id: 2, nome: 'Calabresa', descrição: 'Calabresa fatiada, cebola e azeitonas', preço: 42.90, imagem: unsplash('1565299624946-b28f40a0ae38'), categoria: 'Pizzas' },
  { id: 3, nome: 'Portuguesa', descrição: 'Presunto, mussarela, ovo, cebola e azeitonas', preço: 48.90, imagem: unsplash('1513104890138-7c749659a591'), categoria: 'Pizzas' },
  { id: 4, nome: 'Quatro Queijos', descrição: 'Mussarela, gorgonzola, parmesão e provolone', preço: 52.90, imagem: unsplash('1598023696416-0193a0bcd302'), categoria: 'Pizzas' },
  { id: 5, nome: 'Pepperoni', descrição: 'Molho de tomate, mussarela e pepperoni picante', preço: 49.90, imagem: unsplash('1628840042765-3564da4b1f64'), categoria: 'Pizzas' },
  { id: 6, nome: 'Frango com Catupiry', descrição: 'Frango desfiado e catupiry cremoso', preço: 47.90, imagem: unsplash('1565299624946-b28f40a0ae38'), categoria: 'Pizzas' },
  { id: 7, nome: 'Bacon', descrição: 'Mussarela, bacon crocante e cebola', preço: 49.90, imagem: unsplash('1579751626657-72bc170104cc'), categoria: 'Pizzas' },
  { id: 8, nome: 'Vegetariana', descrição: 'Berinjela, abobrinha, pimentão e mussarela', preço: 46.90, imagem: unsplash('1593560708920-61dd98c46a4e'), categoria: 'Pizzas' },
  { id: 9, nome: 'Napolitana', descrição: 'Mussarela de búfala, tomate e manjericão', preço: 54.90, imagem: unsplash('1571407973424-2817e04f2d9d'), categoria: 'Pizzas' },
  { id: 10, nome: 'Atum', descrição: 'Atum, cebola e mussarela', preço: 48.90, imagem: unsplash('1604382355076-af4b0eb60143'), categoria: 'Pizzas' },
  { id: 11, nome: 'Strogonoff', descrição: 'Strogonoff de frango com batata palha', preço: 50.90, imagem: unsplash('1565299624946-b28f40a0ae38'), categoria: 'Pizzas' },
  // PRATOS (10+ itens)
  { id: 12, nome: 'Lasanha à Bolonhesa', descrição: 'Lasanha caseira com molho bolonhesa e queijo gratinado', preço: 38.90, imagem: unsplash('1551183053-bf91a1d81141'), categoria: 'Pratos' },
  { id: 13, nome: 'Espaguete à Carbonara', descrição: 'Espaguete com bacon, ovos e parmesão', preço: 36.90, imagem: unsplash('1612874742237-6526221588e3'), categoria: 'Pratos' },
  { id: 14, nome: 'Penne ao Molho Pesto', descrição: 'Penne com pesto de manjericão e pinoli', preço: 34.90, imagem: unsplash('1551183053-bf91a1d81141'), categoria: 'Pratos' },
  { id: 15, nome: 'Risoto de Funghi', descrição: 'Risoto cremoso com cogumelos frescos', preço: 42.90, imagem: unsplash('1534422298391-e4f8c172dddb'), categoria: 'Pratos' },
  { id: 16, nome: 'Frango Parmegiana', descrição: 'Filé de frango empanado com molho e mussarela', preço: 39.90, imagem: unsplash('1598511726626-5d34a97a3b10'), categoria: 'Pratos' },
  { id: 17, nome: 'Nhoque de Batata', descrição: 'Nhoque caseiro ao molho de tomate ou quatro queijos', preço: 35.90, imagem: unsplash('1551183053-bf91a1d81141'), categoria: 'Pratos' },
  { id: 18, nome: 'Ravioli de Queijo', descrição: 'Ravioli recheado com ricota e espinafre', preço: 40.90, imagem: unsplash('1612874742237-6526221588e3'), categoria: 'Pratos' },
  { id: 19, nome: 'Fettuccine Alfredo', descrição: 'Fettuccine com molho cremoso de parmesão', preço: 37.90, imagem: unsplash('1645118992878-7b2c2e1c2c3d'), categoria: 'Pratos' },
  { id: 20, nome: 'Polpetone', descrição: 'Bolinho de carne ao molho napolitano', preço: 41.90, imagem: unsplash('1546069901-ba9599a7e63c'), categoria: 'Pratos' },
  { id: 21, nome: 'Bruschetta', descrição: 'Pão italiano com tomate, manjericão e azeite', preço: 22.90, imagem: unsplash('1572695157366-5e585b2321f9'), categoria: 'Pratos' },
  { id: 22, nome: 'Carpaccio', descrição: 'Carne bovina fatiada com rúcula e parmesão', preço: 44.90, imagem: unsplash('1603360946369-dc9a3d070cc0'), categoria: 'Pratos' },
  // SOBREMESAS (10+ itens)
  { id: 23, nome: 'Petit Gateau', descrição: 'Bolo de chocolate com recheio derretido e sorvete', preço: 24.90, imagem: unsplash('1488477181946-6428a0291777'), categoria: 'Sobremesas' },
  { id: 24, nome: 'Cheesecake', descrição: 'Torta de queijo com base de biscoito', preço: 22.90, imagem: unsplash('1533134242443-d4dd2157d755'), categoria: 'Sobremesas' },
  { id: 25, nome: 'Tiramisu', descrição: 'Clássico italiano com café e mascarpone', preço: 26.90, imagem: unsplash('1551024506-0bccd828d307'), categoria: 'Sobremesas' },
  { id: 26, nome: 'Brownie', descrição: 'Brownie de chocolate com nozes', preço: 18.90, imagem: unsplash('1488477181946-6428a0291777'), categoria: 'Sobremesas' },
  { id: 27, nome: 'Panna Cotta', descrição: 'Creme italiano com calda de frutas vermelhas', preço: 21.90, imagem: unsplash('1488477181946-6428a0291777'), categoria: 'Sobremesas' },
  { id: 28, nome: 'Mousse de Maracujá', descrição: 'Mousse leve de maracujá', preço: 19.90, imagem: unsplash('1488477181946-6428a0291777'), categoria: 'Sobremesas' },
  { id: 29, nome: 'Sorvete (3 bolas)', descrição: 'Sabores: chocolate, creme e morango', preço: 14.90, imagem: unsplash('1560008581-098402bd06e4'), categoria: 'Sobremesas' },
  { id: 30, nome: 'Cannoli', descrição: 'Massa crocante recheada com ricota doce', preço: 23.90, imagem: unsplash('1551024506-0bccd828d307'), categoria: 'Sobremesas' },
  { id: 31, nome: 'Pudim de Leite', descrição: 'Pudim tradicional com calda de caramelo', preço: 16.90, imagem: unsplash('1587314128482-e4a2f716a475'), categoria: 'Sobremesas' },
  { id: 32, nome: 'Torta de Limão', descrição: 'Torta de limão com merengue', preço: 20.90, imagem: unsplash('1533134242443-d4dd2157d755'), categoria: 'Sobremesas' },
  { id: 33, nome: 'Brigadeiro Gourmet', descrição: '4 unidades de brigadeiro artesanal', preço: 15.90, imagem: unsplash('1488477181946-6428a0291777'), categoria: 'Sobremesas' },
  // BEBIDAS (10+ itens)
  { id: 34, nome: 'Refrigerante Lata', descrição: 'Coca-Cola, Guaraná ou Fanta 350ml', preço: 6.90, imagem: unsplash('1622483767028-3f66f32aef97'), categoria: 'Bebidas' },
  { id: 35, nome: 'Refrigerante 2L', descrição: 'Coca-Cola ou Guaraná 2 litros', preço: 14.90, imagem: unsplash('1622483767028-3f66f32aef97'), categoria: 'Bebidas' },
  { id: 36, nome: 'Suco Natural', descrição: 'Laranja, limão, maracujá ou abacaxi 500ml', preço: 12.90, imagem: unsplash('1623065422902-33b7e3d363c9'), categoria: 'Bebidas' },
  { id: 37, nome: 'Água Mineral', descrição: 'Água com ou sem gás 500ml', preço: 4.90, imagem: unsplash('1548839140-29cbfe69c8e9'), categoria: 'Bebidas' },
  { id: 38, nome: 'Cerveja Long Neck', descrição: 'Heineken, Brahma ou Stella 330ml', preço: 10.90, imagem: unsplash('1535958636477-b021ee887b13'), categoria: 'Bebidas' },
  { id: 39, nome: 'Vinho Tinto', descrição: 'Taça de vinho tinto seco', preço: 18.90, imagem: unsplash('1544145945-f90425340c7e'), categoria: 'Bebidas' },
  { id: 40, nome: 'Vinho Branco', descrição: 'Taça de vinho branco', preço: 18.90, imagem: unsplash('1510812431401-41e2d92b5b5a'), categoria: 'Bebidas' },
  { id: 41, nome: 'Café Expresso', descrição: 'Café expresso italiano', preço: 5.90, imagem: unsplash('1495474472287-4d71bcdd2085'), categoria: 'Bebidas' },
  { id: 42, nome: 'Cappuccino', descrição: 'Café com leite vaporizado e espuma', preço: 9.90, imagem: unsplash('1572442386656-ac5ea591b938'), categoria: 'Bebidas' },
  { id: 43, nome: 'Limonada', descrição: 'Limonada suave 500ml', preço: 11.90, imagem: unsplash('1623065422902-33b7e3d363c9'), categoria: 'Bebidas' },
  { id: 44, nome: 'Chá Gelado', descrição: 'Chá gelado pêssego ou limão 500ml', preço: 8.90, imagem: unsplash('1544787219-7f8cc5ddf8f5'), categoria: 'Bebidas' },
  { id: 45, nome: 'Água de Coco', descrição: 'Água de coco natural 500ml', preço: 13.90, imagem: unsplash('1622483767028-3f66f32aef97'), categoria: 'Bebidas' },
];
