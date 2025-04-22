const Cart = require('./Cart.js');

test('Add product into the cart', () => {
    const cart = new Cart();

    cart.addItem({ id: 1, name: 'tv', price: 50 });

    expect(cart.total()).toBe(50);
});