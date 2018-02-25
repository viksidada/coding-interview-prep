class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class IsPalendrome {

    palendrome(head) {
        if(!head || !head.next) return true;

        let value = [];
        let result = false;

        while(head) {
            value.push(head.data);
            head = head.next;
            // console.log(`value is : ${value.toString()}`);
        }

        result = ((value.join('')) === (value.reverse().join(''))) ? true : false;
        // console.log(`${value.join('')} ::: ${value.reverse().join('')}`)
        return result;
    }
}

let node1 = new Node(1);
let node2 = new Node(2);
let head = node1;
node1.next = node2;
let test = new IsPalendrome();
console.log(test.palendrome(head));