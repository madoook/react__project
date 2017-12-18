import React, {Component} from 'react';

import { CartStore } from '../../container/cart/Cart.store';

import ReactStars from '../ratings/Ratings.component';
import Slider from '../slider/Slider.component';

import FontAwesome from 'react-fontawesome';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'material-components-web/dist/material-components-web.css';


import './detail.css';

class DetailComponent extends Component {
    addToCart = () => {
        const {_id,price, name} = this.props.details;
        CartStore.addCart(_id,price,name);
    };

    render(){
        const data = this.props.details;
            return (
                    <div className="detail">
                        <div className="detail__wrapper">
                            <div className="detail__image">
                                <Slider images={data.images}/>
                            </div>
                        </div>
                        <div className="detail__wrapper">
                            <div className=" detail__content">
                                <ReactStars
                                    edit={false}
                                    className="ratings"
                                    count={5}
                                    size={20}
                                    value={data.average_rating}
                                    color2={'#ffd700'}/>
                                <div className="detail__content_title">{data.name}</div>
                                <div className={'clearfix'}>
                                    <div className="detail__content_price">
                                        <span className='detail__content_price-title'>Цена: </span>
                                        {data.price} $
                                    </div>
                                    <div className='detail__cart'>
                                        <button className="detail__cart-btn" onClick={this.addToCart}>
                                            <FontAwesome
                                                name='shopping-cart'
                                                style={{
                                                    textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
                                                    padding: '0 1rem 0 0'
                                                }}
                                            />
                                            В корзину
                                        </button>
                                    </div>
                                </div>
                                <div className="detail__content_description">
                                    <p className="detail__content_description-title">Описание: </p>
                                    {data.description}
                                </div>
                                <div className="detail__content_specification">
                                    <div className="detail__content_specification-title">Технические характеристики
                                    </div>
                                    <div className="detail__content_specification-item">
                                        <div className="item__name">Дополнительные возможности</div>
                                        <div className="item__value">{data.additionalFeatures}</div>
                                    </div>
                                    <div className="detail__content_specification-item">
                                        <div className="item__name">{data.android.os}</div>
                                        <div className="item__value">{data.android.ui}</div>
                                    </div>
                                    <div className="detail__content_specification-item">
                                        <div className="item__name">availability</div>
                                        <div className="item__value">{data.availability}</div>
                                    </div>
                                    <div className="detail__content_specification-item">
                                        <div className="item__name">Камера</div>
                                        <div className="item__value">{data.camera.primary} {data.camera.features}</div>
                                    </div>
                                    <div className="detail__content_specification-item">
                                        <div className="item__name">connectivity</div>
                                        <div className="item__value">
                                            {data.connectivity.wifi}
                                            {data.connectivity.infrared}
                                            {data.connectivity.gps}
                                            {data.connectivity.cell}
                                            {data.connectivity.bluetooth}
                                        </div>
                                    </div>
                                    <div className="detail__content_specification-item">
                                        <div className="item__name">display</div>
                                        <div className="item__value">
                                            {data.display.touchScreen}
                                            {data.display.screenSize}
                                            {data.display.screenResolution}
                                        </div>
                                    </div>
                                    <div className="detail__content_specification-item">
                                        <div className="item__name">hardware</div>
                                        <div className="item__value">
                                            {data.hardware.usb}
                                            {data.hardware.physicalKeyboard}
                                            {data.hardware.fmRadio}
                                            {data.hardware.cpu}
                                            {data.hardware.audioJack}
                                            {data.hardware.accelerometer}
                                        </div>
                                    </div>
                                    <div className="detail__content_specification-item">
                                        <div className="item__name">sizeAndWeight</div>
                                        <div className="item__value">
                                            {data.sizeAndWeight.weight}
                                            {data.sizeAndWeight.dimensions}
                                        </div>
                                    </div>
                                    <div className="detail__content_specification-item">
                                        <div className="item__name">storage</div>
                                        <div className="item__value">
                                            {data.storage.ram}
                                            {data.storage.flash}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            )
        }

}

export default DetailComponent;