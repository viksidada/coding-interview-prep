class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedLIst {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
        return this.head;
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    printLL() {
        let node = this.head;

        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }

    getAt(index) {
        if (!this.head) return null;

        let count = 0;
        let node = this.head;

        while (count < index) {
            count++;
            node = node.next;
        }

        return (node);
    }

    removeAt(index) {
        if (!this.head) return;

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let previous = this.getAt(index - 1);
        let forward = this.getAt(index + 1);

        previous.next = forward;
    }
}

const clone = (list) =
>
{
    let node = list.head;
    let clone = list.head;

    console.log(clone);
}

const reverse = (head) =
>
{
    // if(!head || !head.next) return head;
    //
    // let newHead = reverse(head.next);
    // head.next.next = head;
    // head.next = null;
    //
    // return newHead;

    let previous = null;
    let current = head;

    while (current) {
        let newTemp = current.next;
        current.next = previous;
        previous = current;
        current = newTemp;
    }

    return previous;
}

const addition = (l2, l3) =
>
{
    let num2 = "";
    let num3 = "";
    let sum = 0;

    let node2 = l2.head;
    let node3 = l3.head;

    while (node2) {
        num2 += node2.data;
        node2 = node2.next;
    }

    while (node3) {
        num3 += node3.data;
        node3 = node3.next;
    }

    let sum2 = parseInt(num2.split("").reverse().join(""));
    let sum3 = parseInt(num3.split("").reverse().join(""));
    sum = sum2 + sum3;
    let finalSum = sum.toString().split("").reverse().join("");
    console.log(`sum2 is ${sum2} and sum3 is ${sum3} and sum is ${sum} and finalSum is ${finalSum}`);


    let newHead = new Node(parseInt(finalSum.charAt(0)));
    let tail = newHead;

    // console.log(newHead);
    let count = 1;

    while (count < finalSum.length) {
        let number = parseInt(finalSum.charAt(count))
        let temp = new Node(number);
        tail.next = temp;
        tail = temp;
        count++;
    }
    console.log(newHead);
}

let node = new Node(5);

let ll = new LinkedLIst();
let ll2 = new LinkedLIst();
let ll3 = new LinkedLIst();

let node2 = new Node(3);
ll2.head = node2;
let node3 = new Node(4);
ll3.head = node3;

ll2.insertFirst(4);
ll2.insertFirst(2);

ll3.insertFirst(6);
ll3.insertFirst(5);

// console.log(ll2);
// console.log(ll3);

addition(ll2, ll3);

ll.head = node;
ll.insertFirst(10);
ll.insertFirst(15);
ll.insertFirst(20);
ll.insertFirst(25);
// console.log(ll);

// console.log(ll.size());
// // ll.printLL();
// console.log(ll.getAt(0));
// console.log(ll.getAt(1));
// console.log(ll.getAt(2));
// console.log(ll.getAt(3));
// console.log(ll.getAt(4));
//
// ll.removeAt(2);
// ll.printLL();

// clone(ll);
// console.log("REVERSE: ");
// console.log(reverse(ll.head));
