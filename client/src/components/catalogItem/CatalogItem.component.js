import React, { Component } from 'react';
import ReactStars from '../ratings/Ratings.component';

import { CartStore } from '../../container/cart/Cart.store';
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';

export class CatalogItemComponent extends Component {
    constructor(){
        super();
        this.url = 'http://localhost:4001/api/v1/';
    }

    addToCart = () => {
        const {_id, price, name} = this.props.data;
        CartStore.addCart(_id,price,name);
    };

    render(){
        const data = this.props.data;
        const id = this.props.data._id;
        return(
            <div className="catalog__item-wrapper" key={this.id} >
                <div className="catalog__item">
                   <Link to={'/details/'+id}>
                    <div className="catalog__item-poster">
                        <img src={this.url+data.imgUrl} alt={data.name}/>
                      </div>
                   </Link>
                    <ReactStars
                        edit={false}
                        count={5}
                        size={24}
                        value={data.average_rating}
                        color2={'#ffd700'} />
                    <Link to={'/details/'+id}>
                        <div className="catalog__item-title">
                            {data.name}
                        </div>
                    </Link>
                    <div className="catalog__item-price">{data.price} $</div>
                    <div className="catalog__item-detail">
                        {data.description}
                    </div>
                    <div className="catalog__item-cart">
                        <button className="catalog__item-cart_btn" onClick={this.addToCart}>
                            <FontAwesome
                                name='shopping-cart'
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            />
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}