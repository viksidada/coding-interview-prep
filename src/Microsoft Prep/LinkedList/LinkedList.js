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
        let lastNode = new Node(data);

        let node = this.head;

        while (node.next) {
            node = node.next;
        }

        node.next = lastNode;

    }

    showList() {
        if (!this.head) return null;

        while (this.head) {
            console.log(this.head.data);
            this.head = this.head.next;
        }

        // console.log(this.head);
    }

    reverse(head) {
        if (!head || !head.next) return head;

        let newHead = reverse(head.next);
        head.next.next = head;
        head.next = null;
        return newHead;
    }


}

let linkedlist = new LinkedList();
let node = new Node(5);

linkedlist.head = node;
linkedlist.insertFirst(100);
linkedlist.insertFirst(200);
// linkedlist.showList();
linkedlist.insertLast(500);
linkedlist.insertLast(300);
console.log("after");
// linkedlist.showList();
console.log(linkedlist.reverse(linkedlist));
linkedlist.showList();