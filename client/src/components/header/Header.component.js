import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

import { CartStore } from '../../container/cart/Cart.store';


import './header.css';

class Header extends Component {
    constructor(){
        super();
        this.state = {
            cart:[]
        };
        CartStore.subscribe('CartChanged', (cart) => {
            this.setState((state) => {
                state.cart = cart;
                return state;
            })
        })

    }
    render(){
        const cart = this.state.cart;
        const countCart = cart.length;
        let totalPrice = 0;
        cart.map((item) => {
            return totalPrice +=item.price;
        });
        return(
            <header className="header">

                <div className="header__wrapper">
                    <div className="header__title">
                        <h1 className="App-title">Купи мобилу :)</h1>
                    </div>
                    <div className={'menu'}>
                        <div className="header__item">
                            <button className="header__item-btn">
                                <Link to='/'>
                                    <FontAwesome
                                        name='bars'
                                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',padding: '0 1rem 0 0' }}
                                    />
                                    Каталог товаров
                                </Link>
                                </button>
                        </div>

                    </div>

                    {/*<div className="header__search">*/}
                        {/*<input type="text" className='header__search_input'/>*/}
                    {/*</div>*/}
                    <div className="header__cart">
                        <FontAwesome
                            name='shopping-basket'
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',padding: '0 0.5rem 0 0' }}
                        />
                        <Link to='/cart/'>
                            <div className="header__cart-items">
                                <div className="header__cart_items-count">{countCart}</div>
                                <div className="header__cart_items-goods">Сумма: {totalPrice} $</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;