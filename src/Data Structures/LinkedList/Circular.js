// Return true if list is circular and false if it is not

const circularList = (list) => {

    if(!list.head) return 'false';

    let slow = list.head;
    let fast = list.head;

    while(fast.next && fast.next.next) {
        if (slow === fast) {
            return true;
        }

        slow = slow.next;
        fast = fast.next.next;
    }

    return fasle;
}