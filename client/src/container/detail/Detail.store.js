import { EventEmitter } from "../../EventEmitter";


class DetailsStore extends EventEmitter {
    constructor() {
        super();
        this.apiUrl = 'http://localhost:4001/api/v1/phones/';
        this.details = {};

    }

    fetchDetail(id) {

        fetch(`${this.apiUrl}${id}`)
            .then(response => response.json())
            .then((data) => {
                this.details = {};
                this.details = data;
                this.publish('Details', this.details)
            })
            .catch((error) => {
                console.error(error);
            });

    }
}

const DetailStore = new DetailsStore();

export { DetailStore };