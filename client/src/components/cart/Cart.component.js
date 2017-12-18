import React, { Component } from 'react';
import { CartStore } from '../../container/cart/Cart.store';


import FontAwesome from 'react-fontawesome';
import 'material-components-web/dist/material-components-web.css';

import './cart.css';


class CartComponent extends Component {

    render() {
        const cart = this.props.cart;
        return cart.map((cart) => {
            return (
                <div key={cart.id} className="cart__item">
                    <div className="cart__item_name">
                        Название: {cart.name}
                    </div>
                    <div className="cart__item_price">
                        Цена: {cart.price}
                    </div>
                    <div className="cart__item_del">
                        <button className="cart__item_del-btn" onClick={() => CartStore.removeCartItem(cart.id)}>
                            <FontAwesome
                                name='trash'
                                style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', padding: '0 1rem 0 0'}}
                            />
                        </button>
                    </div>
                </div>
            )
        })
    }
}


export default CartComponent;
