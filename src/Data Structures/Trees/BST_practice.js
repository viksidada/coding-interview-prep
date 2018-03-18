class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(data) {

        const node = this.root;

        if (node === null) {
            this.root = new Node(data);
            return;
        }

        const searchTree = (node) => {
            if(data < node.data) {
                if(node.left === null) {
                    node.left = new Node(data);
                    return;
                } else return searchTree(node.left);
            } else if(data > node.data) {
                if(node.right === null) {
                    node.right = new Node(data);
                    return;
                } else searchTree(node.right);
            } else return null;
        }

        return searchTree(node);
    }

    findMin() {
        let current = this.root;
        while(current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    findMax() {
        let current = this.root;
        while(current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    isPresent(data) {
        let current = this.root;
        if(!current) return false;

        while(current) {
            if(current.data === data) return true;

            if(data < current.data) {
                current = current.left;
            } else current = current.right;
        }

        return false;
    }

    inOrder() {
        if(this.root === null) return null;
        let result = [];

        const inOrderTravseal = (node) => {
            node.left && inOrderTravseal(node.left);
            result.push(node.data);
            node.right && inOrderTravseal(node.right);
        }

        inOrderTravseal(this.root);
        return result;
    }

    preOrder() {
        if(this.root === null) return null;
        let result = [];

        const preOrderTravseal = (node) => {
            result.push(node.data);
            node.left && preOrderTravseal(node.left);
            node.right && preOrderTravseal(node.right);
        }

        preOrderTravseal(this.root);
        return (result);
    }

    postOrder() {
        if(this.root === null) return null;
        let result = [];

        const postOrderTraversal = (node) => {
            node.left && postOrderTraversal(node.left);
            node.right && postOrderTraversal(node.right);
            result.push(node.data);
        }
        postOrderTraversal(this.root);
        return result;
    }

    maxHeight(node = this.root) {
        if(node === null) return -1;

        let left = this.maxHeight(node.left);
        let right = this.maxHeight(node.right);

        if(left > right) {
            return left+1;
        } else return right + 1;
    }

    levelOrder() {
        let result = [];
        let queue = [];

        if(this.root === null) return null;
        else queue.push(this.root);

        while(queue.length > 0) {
            let node = queue.shift();
            temp.push(node.data);
            queue.push(node.left);
            queue.push(node.right);
        }
    }
}

let bst = new BST();

let node = new Node(4);
bst.root = node;

bst.add(5);
bst.add(3);
bst.add(7);
bst.add(1);

// console.log(bst);
// console.log(bst.findMin());
// console.log(bst.findMax());
// console.log(bst.isPresent(1));
// console.log(bst.isPresent(5));
// console.log("inOrder: " + bst.inOrder());
// console.log(`Pre-Order: ${bst.preOrder()}`);
// console.log("Post-Order: " + bst.postOrder());

console.log('levelOrder: ' + bst.levelOrder());