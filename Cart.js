class Cart {
    items = [];

    constructor() {
        this.items = [];
    }

    addItem(product) {
        this.items.push(product);
    }

    total() {
        return this.items.reduce((soma, p) => soma + p.price, 0);
    }
}

module.exports = Cart;