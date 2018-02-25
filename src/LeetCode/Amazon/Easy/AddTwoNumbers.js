
const addTwoNumbers = (l1, l2) => {

    let num1 = num2 = "";

    while (l1 || l2) {
         if(l1.next === null) l1.val = '';
         if(l2.next === null) l2.val = '';

         num1 += l1.val;
         num2 += l2.val;
    }

    arr1 = num1.split('').reverse().join('');
    arr2 = num2.split('').reverse().join('');

}