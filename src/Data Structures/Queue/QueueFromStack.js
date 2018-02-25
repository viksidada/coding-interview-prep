// const Stack = require('./Stack');


class Stack {
    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.push(record);
    }

    remove() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length-1];
    }
}

class Queue extends Stack{
    constructor() {
        super();
        this.first = new Stack();
        this.second = new Stack();

    }

    add(record) {
        this.first.add(record);
    }

    remove() {
        while(this.first.peek()) {
            this.second.add(this.first.remove());
        }

        const record = this.second.remove();

        while(this.first.peek()) {
            this.second.add(this.second.remove());
        }

        return record;
    }

    peek() {
        while(this.first.peek()) {
            this.second.add(this.first.remove());
        }

        const record = this.second.peek();

        while(this.second.peek()) {
            this.first.add(this.second.remove());
        }

        return record;
    }
}

let s1 = new Queue();

s1.add(5);
s1.add(45);
s1.add(55);

console.log(s1);
console.log(s1.peek());

s1.remove();
s1.remove();

console.log(s1.peek());