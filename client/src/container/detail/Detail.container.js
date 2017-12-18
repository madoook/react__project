import React, {Component} from 'react';
import loadImg from '../../ajax-loader.gif';

import { DetailStore } from './Detail.store';
import DetailComponent from '../../components/detail/Detail.component';
import CommentsContainer from '../comments/Commets.container';



class DetailContainer extends Component {

    constructor(){
        super();
        this.state = {
            details: []
        };
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        DetailStore.fetchDetail(id);
        DetailStore.subscribe('Details', (details) => {
            this.setState((state) => {
                if (this.unmounted) return;
                state.details = details;
                return state;
            })
        })
    }

    componentWillUnmount() {
        this.unmounted = true
    }

    render(){
        if(this.state.details.length !== 0) {
            return (
                <div className="content-wrapper">
                    <DetailComponent details={this.state.details}/>
                    <CommentsContainer id={this.props.match.params.id}/>
                </div>
            )
        }
        else {
            return (
                <div>
                    <img src={loadImg} alt={'Loading'}/>
                </div>
            )
        }

    }
}

export default DetailContainer;