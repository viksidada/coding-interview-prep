const reverse = (head) => {
    // let prev = null;
    //
    // while(head) {
    //     let next = head.next;
    //     head.next = prev;
    //     prev = head;
    //     head = next;
    // }
    // return prev;

    if (!head || !head.next) {
        return head;
    }
    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
}