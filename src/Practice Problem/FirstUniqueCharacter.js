const unique = (str) => {
    if(s.length === 0) return -1;

    if(s.length === 1) return  0;


    for(let i = 0; i < s.length; i++) {
       if ((s.indexOf(s.charAt(i))) === (s.lastIndexOf(s.charAt(i)))) {
           return i;
       }
    }

    return -1;
}

console.log(unique('leetcode'));
console.log(unique('loveleetcode'));