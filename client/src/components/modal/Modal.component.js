import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './modal.css';

export default class Modal extends Component {
    static  propTypes = {
            onClose: PropTypes.func.isRequired,
            show: PropTypes.bool,
            children: PropTypes.node
    }
    render(){
        if(!this.props.show) {
            return null;
        }

        return (
            <div className="backdropStyle">
                <div className="modalStyle">
                    <button className='modalClose' onClick={this.props.onClose}>
                        <FontAwesome
                            name='close'
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', fontSize: '2rem' }}
                        />
                    </button>
                    {this.props.children}
                </div>
            </div>
        );
    }

}
