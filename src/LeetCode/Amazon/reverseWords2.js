const reverseWords = (str) => {
    reverse(str, 0, str.length-1);

    var head = 0, pointer = 0;
    while (pointer !== (str.length+1)) {
        if (str[pointer] === " " || pointer === str.length) {
            reverse(str, head, pointer-1);
            head = pointer+1;
            pointer++;
        }
        else {
            pointer++;
        }
    }
    console.log(head,pointer);
}


function reverse (str, start, end) {
    var p1 = start, p2 = end;
    var tmp;
    while (p2 > p1) {
        tmp = str[p1];
        str[p1] = str[p2];
        str[p2] = tmp;
        p2--;
        p1++;
    }
    return;
}

console.log(reverseWords(["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]));