import React, { Component } from 'react';
import OrderComponent from '../../components/order/Order.component'

class FormComponent extends Component {
    constructor(){
        super();
        this.state = {
            isEnabled: false,
            name:'',
            ticket: '',
            isOpen: false
        };
    }

    addTicket = () => {
        this.setState((state) => {
            state.isOpen = true;
            return state;
        })
    };

    toggleModal = () => {
        this.setState((state) => {
            state.isOpen = !this.state.isOpen;
            return state;
        })
    };

    handleChangeName = (e) => {
        if (e.target.value !== null) {
            this.setState({
                name: e.target.value,
                isEnabled: true
            });
        }
    };

    handleChangeText = (e) => {
        if (e.target.value !== null) {
            this.setState({
                ticket: e.target.value
            })
        }
    };

    render(){
        const ticket = {
            name: this.state.name,
            ticket: this.state.ticket
        }
        return (
            <div className="comments-form">
                <div className="mdc-text-field">
                    <input type="text"
                           className="mdc-text-field__input"
                           placeholder="ФИО"
                           onChange={this.handleChangeName}
                           value={this.state.name}
                    />
                </div>
                <div className="mdc-text-field mdc-text-field--fullwidth mdc-text-field--textarea">
              <textarea
                  id="textarea"
                  className="mdc-text-field__input"
                  rows="6"
                  cols="30"
                  readOnly={this.state.isEnabled !== false ? false : true}
                  onChange={this.handleChangeText}
                  placeholder={'Текст'}
              >
              </textarea>
                </div>
                <button
                    onClick={this.addTicket}
                    className="mdc-button mdc-button--raised secondary-filled-button mdc-ripple-upgraded"
                    disabled={this.state.name !== '' && this.state.ticket !== '' ? false : true}> Отправить
                </button>
                <div>
                <OrderComponent ticket={ticket} cart={this.props.cart} isOpen={this.state.isOpen} toggleModal={this.toggleModal}/>

                </div>
            </div>

        )
    }
}

export default FormComponent;