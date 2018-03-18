class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
       this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while(node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

   getFirst() {
        return this.head;
    }

    getLast() {

        if (!this.head) return null;

        let lastNode = null;
        let node = this.head;

        while(node) {
            lastNode = node;
            node = node.next;
        }

        return lastNode;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {

        if(!this.head) return;

        this.head = this.head.next;
    }

    removeLast() {
        if(!this.head) return;

        if(!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        while(node.next) {
            previous = node;
            node = node.next;
        }

        previous.next = null;
    }

    insertLast(data) {

        if(!this.head) {
            this.head = new Node(data);
            return;
        }

        let node = this.head;
        // list.getLast().next = new Node(data);

        while (node) {
            if(!node.next) {
                node.next = new Node(data);
                return;
            }
            node = node.next;
        }
    }

    getAt(index) {

        if(!this.head) return null;

        if (index === 0) {
            return this.head;
        }

        let count = 0;
        let node = this.head;

        while(node) {
            if(count === index) return node;

            count++;
            node = node.next;
        }

        return null;
    }

    removeAt(index) {

        if(!this.head) return;

        if(index === 0) {
            this.head = this.head.next;
            return;
        }

        let node = this.head;
        let count = 0;
        let previous = this.getAt(index-1);
        let forward = this.getAt(index+1);

        previous = forward;


        // while(node) {
        //     if(index === count) {
        //         previous.next = previous.next.next;
        //         return;
        //     }
        //
        //     // previous = node;
        //     node = node.next;
        //     count++;
        // }
        // return null;
    }
}

module.exports = LinkedList;

let node = new Node(5);

let list = new LinkedList();
list.head = node;
list.insertFirst(15);
list.insertFirst(25);
list.insertFirst(35);
list.insertFirst(45);
list.insertFirst(55);

console.log(list);
console.log(list.size());
console.log(list.getLast());
(list.removeLast());
console.log(list.getLast());
(list.insertLast(65));
console.log(list.getLast());
console.log(list.getAt(0));
list.removeAt(1);
console.log(list);
list.removeAt(1);
console.log(list);
console.log(list.getAt(3));
list.removeAt(9);
console.log(list.getAt(3));



