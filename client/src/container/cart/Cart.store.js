import { EventEmitter } from "../../EventEmitter";

class CartStores extends EventEmitter {
    constructor(){
        super();
        this.cart = []
    }

    getCart(){
        return this.cart;
    }

    addCart (cart_id,price,name) {
        this.cart.push({
            id: Date.now(),
            cart_id: cart_id,
            name: name,
            price: price
        });
        this.publish('CartChanged', this.cart);
    }

    removeCartItem (id) {
        this.cart = this.cart.filter((cart) => cart.id !==id);
        this.publish('CartChanged', this.cart);
    }

}

const CartStore = new CartStores();



export { CartStore };