import React, {Component} from 'react';
import ReactStars from '../ratings/Ratings.component';

import { CommentStore } from '../../container/comments/Commets.store';

import './comments.css';


class CommentsComponent extends Component
{
        state = {
            rating: 0,
            isEnabled: false,
            author: '',
            text: ''

        };

    handleAuthorChange = (e) => {
        if (e.target.value !== null) {
            this.setState({
                author: e.target.value,
                isEnabled: true
            })
        }

    };

    handleTextChange = (e) => {
        this.setState({
            text: e.target.value
        })

    };

    commentsRender =  (comments) => {
        return comments.map((comment) => {
            return (
                <div key={Math.random() * Date.now()} className="comments__item">
                    <div className="comments__item_author clearfix">
                       <div className="comments__item_author-name">
                        {comment.author}
                       </div>
                        <ReactStars
                            edit={false}
                            className={'comments__item_author-ratings'}
                            count={5}
                            size={16}
                            value={comment.item_rating}
                            color2={'#ffd700'}/>
                    </div>
                    <div className="comments__item_text">
                        {comment.text}
                    </div>
                </div>
            )
        })
    };

    addComment = (e) => {
        e.preventDefault();
        const id = this.props.id;
        const author = this.state.author;
        const text = this.state.text;
        const ratings = this.state.rating;

        CommentStore.addComment(id,  text, author, ratings);
        console.log(id,  text, author, ratings);
        this.setState({
            rating: 0,
            isEnabled: false,
            author: '',
            text: ''
        })
    };

    render() {
        const ratingChanged = (newRating) => {
            this.setState((state) => {
                state.rating = newRating;
                return state;
            })
        };
        const comments = this.props.comments;
        return (
            <div className="comments__block">
                <div className="comments__items">
                    <h2>Отзывы покупателей:</h2>
                    {this.commentsRender(comments)}
                </div>
                <ReactStars
                    className="ratings"
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    value={this.state.rating}
                    color2={'#ffd700'}/>
                <div className="comments-form">
                    <h3>Оставить отзыв:</h3>
                    <div className="mdc-text-field">
                        <input type="text"
                               className="mdc-text-field__input"
                               placeholder="Автор"
                               onChange={this.handleAuthorChange}
                               value={this.state.author}
                        />
                    </div>
                    <div className="mdc-text-field mdc-text-field--fullwidth mdc-text-field--textarea">
              <textarea
                  id="textarea"
                  className="mdc-text-field__input"
                  rows="6"
                  cols="30"
                  readOnly={this.state.isEnabled !== false ? false : true}
                  onChange={this.handleTextChange}
                  placeholder={'Текст коментария'}
                  value={this.state.text}
              >
              </textarea>
                    </div>
                    <button
                        onClick={this.addComment}
                        className="mdc-button mdc-button--raised secondary-filled-button mdc-ripple-upgraded"
                        disabled={this.state.text !== '' && this.state.author !== '' ? false : true}> Отправить
                    </button>
                </div>
            </div>
        );
    }
}

export default  CommentsComponent;