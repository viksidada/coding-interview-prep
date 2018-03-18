const validateBST = (node, min = null, max) {

    if( max !== null && node.data > max) {
        return false;
    }

    if(min !== null && node.data < min) {
        return false;
    }

    if(node.left && !validateBST(node.left, min, node.data)) {
        return false;
    }

    if(node.right && !validateBST(node.right, node.data, max)) {
        return false;
    }

    return true;
}