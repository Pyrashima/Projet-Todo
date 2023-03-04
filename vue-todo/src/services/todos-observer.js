class TodosObserver {
    constructor(todos) {
        this.td = this.createTodosObject(todos)
    }

    // Subcribe
    subcribe(todos, callback) {
        if (!this.td[todos]) {
            this.td[todos] = [];
        }

        this.td[todos].push(callback);

        return () => this.unsubcribe(todos, callback)
    }

    // Unsubcribe
    unsubcribe(todos, callback) {
        if (!this.td[todos]) return;
        this.td[todos] = this.td[todos].filter(
            cb => cb !== callback
        );
    }

    // Publish
    publish(todos, ...args) {
        this.td[todos].forEach(cb => cb(...args));
    }

    createTodosObject(todos) {
        return Object.values(todos).reduce((acc, value) => {
            if (!acc[value]) {
                acc = { ...acc, [value]: [] }
            }
            return acc;
        }, {})
    }
}

export default todos - observer;