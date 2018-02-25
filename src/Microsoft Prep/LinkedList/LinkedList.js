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
}

let list = new LinkedList();
list.head = new Node(5);
list.insertLast(10);
list.insertLast(20);
console.log(list);
list.insertFirst(100);
console.log(list);