class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
       this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data;
        });
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF() {

        let result = [];
        let q = [];

        if(this.root === null) return null;

        q.push(this.root);
        while(q.length > 0) {
            let node = q.shift();
            result.push(node.data);

            if(node.left !== null) {
                q.push(node.left);
            };

            if(node.right !== null) {
                q.push(node.right);
            };
        }

        return result;
    }

    travserseDF(fn) {
        const arr = [this.root];
        while(arr.length) {
            console.log(arr[0]);
            const node = arr.shift();

            arr.unshift(...node.children);
            fn(node);
        }
    }


}

let node = new Node(5);
let  tree = new Tree();
tree.root = node;
node.add(10);
node.add(15);

tree.traverseBF();