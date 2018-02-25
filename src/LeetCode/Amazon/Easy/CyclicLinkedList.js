const cycle = (head) => {
    let slow = head;
    let fast = head;
    result = false;

    while(slow.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast) {
            result = true;
            break;
        }
    }

    return result;
}