class MinStack {
    constructor(data) {
        this.data = [];
        this.min = [];
    }

    push(data) {
        this.data.push(data);

        if([this.min.length === 0] || (this.min[this.min.length-1] > data)) this.min.push(data);
    }

    pop() {
        let value = this.data.pop();

        if(value === this.getMin()) this.min.pop();
    }

    top() {
        return this.data[this.data.length-1];
    }

    getMin() {
        return this.min[this.min.length-1];
    }
}

