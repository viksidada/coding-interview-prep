const reverse = (head) => {
    if(!head || !head.next) return head;

    let newHead = reverse(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
}


