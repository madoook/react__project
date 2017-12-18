import React, {Component} from 'react';

import { CommentStore } from './Commets.store';
import CommentsComponent from '../../components/comments/Comments.component'


class CommentsContainer extends Component
{
    constructor(props){
        super(props);
         this.state = {
            comments: []
        };
    }


    componentDidMount() {
        CommentStore.fetchComments(this.props.id);
        CommentStore.subscribe('Comments', (comments) => {
            this.setState((state) => {
                if (this.unmounted) return;
                state.comments = comments;
                return state;
            })
        })
    }

    componentWillUnmount() {
        this.unmounted = true
    }

    render() {
        return (
            <CommentsComponent comments={this.state.comments} id={this.props.id}/>
        );
    }
}

export default  CommentsContainer;