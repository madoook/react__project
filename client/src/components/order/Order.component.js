import React, { Component } from 'react';

import Modal from '../modal/Modal.component';
import './order.css';
class OrderComponent extends Component {

    state = {
        isOpen: false
    };

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render () {
        let price = 0;
        console.log('modal',this.props.cart);
        return <Modal show={this.props.isOpen}
                      onClose={this.props.toggleModal}>
            <h2>Ваш заказ!</h2>
            <div>
                <div className="order__item">
                    <div className="order__item-title">ФИО</div>
                    <div className="order__item-text">{this.props.ticket.name}</div>
                </div>
                <div className="order__item">
                    <div className="order__item-title">Текст заказа</div>
                    <div className="order__item-text">{this.props.ticket.ticket}</div>
                </div>
            </div>
            <div>
            <div className="order__table">
                <div className="order__table-head">
                    <div className="order__table-item" key={Date.now()}>
                        <div className="order__table-head_goods">Товар</div>
                        <div className="order__table-head_price">Цена</div>
                    </div>
                </div>
                <div className='order__table-body'>
                {this.props.cart.map((cart, i) => {
                        price += cart.price
                        return (
                            <div className="order__table-item" key={Math.random() + i * Date.now()}>
                                <div className="order__tables-item_goods">{cart.name}</div>
                                <div className="order__tables-item_price">{cart.price} $</div>
                            </div>
                        )
                    }
                )}
                К оплате {price} $
                </div>
            </div>
            </div>
        </Modal>
    }
}
export default OrderComponent;
