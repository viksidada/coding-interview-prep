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

module.exports = Stack;
