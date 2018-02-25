class MinStack {
    constructor() {
        this.first = [];
        this.min = [];
    }

    push(data) {
        this.first.push(data);

        let min = this.getMin();

        if(min === undefined || min >= data) {
            this.min.push(data);
        }
    }

    pop() {
        let value = this.first.pop();
        let min = this.getMin();

        if(min === value) this.min.pop():
    }

    top() {
        return this.first[this.first.length-1];
    }

    getMin() {
        return this.min[this.min.length-1];
    }
}

let minStack = new MinStack();
minStack.push(1);
minStack.push(2);
// minStack.push(3);
// minStack.push(0);
// console.log(minStack);
console.log(minStack.top());
console.log(minStack.getMin());
// minStack.pop();
// console.log(minStack.getMin());
// console.log(minStack.top());

// console.log(minStack.getMin());
// minStack.pop();
// console.log(minStack.getMin());
