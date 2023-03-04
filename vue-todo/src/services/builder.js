class Todo {
    constructor(todo) {
        this.todo = todo;
    }
    static Builder = class {
        static title = null;
        static content = null;
        static timelimit = null;
        static done = false;

        static withTitle(title) {
            this.title = title;
            return this;
        }
        static withContent(content) {
            this.content = content;
            return this;
        }
        static withTimelimit(timelimit) {
            this.timelimit = timelimit;
            return this;
        }
        static withDone(done) {
            this.done = done;
            return done;
        }

        static build() {
            return new Todo({ title: this.title, content: this.content, timelimit: this.timelimit, done: this.done }).done;
        }
    }
}

export default Todo;