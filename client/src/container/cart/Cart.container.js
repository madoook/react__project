import React, { Component } from 'react';

import CartComponent from '../../components/cart/Cart.component'
import FormComponent from '../../components/form/Form.component'

import { CartStore } from './Cart.store';

class CartContainer extends Component {
    constructor(){
        super();
        this.state = {
            cart: [],
            isEnabled: false,
            name:'',
            ticket: '',
            isOpen: false,
        }
        this.mount = false;

    }
    componentDidMount() {
        console.log(this.state.mount);
        this.mount = true;
            if (this.mount === true){
            CartStore.subscribe('CartChanged', (cart) => {
                this.setState((state) => {
                    state.cart = cart;
                    return {...state};
                })
            });

            }
            this.setState((state) => {
                state.cart = CartStore.getCart()
                return {...state};
            });


    }

    componentWillUnmount() {
        this.unmounted = true
        this.mount = false;
    }


    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };



    render() {

        const cart = this.state.cart;
        if (cart.length !== 0) {
            return (
                <div className="cart">
                    <CartComponent cart={cart} />
                    <FormComponent cart={cart} />

                </div>
            );
        }else {
            return (
                <div className="cart">
                    Ваша корзина пуста.
                </div>
            )
        }
    };
}


export default CartContainer;
