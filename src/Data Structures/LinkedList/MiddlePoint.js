const midpoint = (list) => {

    if(!this.head) return null;

    let slow = list.head;
    let fast = list.head;

    while(fast) {
        if(fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
    }

    return slow;
}
