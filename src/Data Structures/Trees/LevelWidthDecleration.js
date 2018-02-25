const levelWidth = (root) => {
    let counters = [0];
    let arr = [root, 's'];

    while(arr.length > 1) {
        const node = arr.shift();

        if(node === 's') {
            counters.push(0);
            arr.push('s');
        } else {
            arr.push(...node.children);
            counters[counters.length-1]++;
        }
    }

    return counters;
}