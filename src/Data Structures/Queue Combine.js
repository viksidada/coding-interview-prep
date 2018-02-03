const Queue = require('./queue');

const weave = (q1, q2) =>
{

    let finalQueue = new Queue();

    while (q1.peek() || q2.peek()) {

        if (q1.peek()) {
            finalQueue.add(q1.remove());
        }

        if (q2.peek()) {
            finalQueue.add(q2.remove());
        }
    }

    return finalQueue;
}

let q1 = new Queue();
let q2 = new Queue();
q1.add(1);
q1.add(2);
q1.add(3);
q1.add(88);
q2.add('Hi');
q2.add('There!');

console.log(weave(q1, q2));