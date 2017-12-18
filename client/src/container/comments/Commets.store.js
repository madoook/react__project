import { EventEmitter } from "../../EventEmitter";


class CommentsStore extends EventEmitter {
    constructor(){
        super();
        this.apiUrl = 'http://localhost:4001/api/v1/comments/';
        this.commnets = []
    }

    fetchComments(id) {

        fetch(`${this.apiUrl}${id}`)
            .then(response => response.json())
            .then((data) => {
                this.commnets = [];
                data.map((arr)=> this.commnets.push(arr));
                this.publish('Comments', this.commnets)
            })
            .catch((error) => {
                console.error(error);
            });

    }

    addComment (id,text,author,rating) {

        fetch(`${this.apiUrl}`,{
            method: 'POST',
            headers: {
                "Content-type": "application/JSON; charset=UTF-8"
            },
            body: '{ "item_id":"'+id+'","text": "'+text+'", ' +
            '"author": "'+author+'", ' +
            '"item_rating": '+rating+' }'
        })
            .then(response => response.json())
            .then(() => {
                    this.commnets.push({
                        item_id: id,
                        text: text,
                        author: author,
                        item_rating: rating
                    });
                this.publish('Comments', this.commnets);
            })
            .catch((error) => {
                console.error(error);
            });

    }


}

const CommentStore = new CommentsStore();

export { CommentStore };