class EventEmitter {
    constructor() {
        this._listeners = {};
    }

    subscribe(event, callback) {
        if (!this._listeners[event]) {
            this._listeners[event] = [];
        }

        this._listeners[event].push(callback);
    }

    publish(event, data) {
        console.log(event, data);
        this._listeners[event].forEach((eventCallback) => {
            eventCallback(data);
        });
    }
}

export { EventEmitter };