// incorrect solution. need to revisit

const seperate = (s) => {

    let result = s.charAt(0);

  for (let i = 1; i < s.length; i++) {
        let number = parseInt(result.charAt(0));
        result += (number+i);
        console.log('result: ' + result);
    }

    if (result === s) {
        console.log('YES' + ' ' + result.charAt(0));

    } else {

         result = s.charAt(0) + s.charAt(1);

        for (let i = 2; i < s.length/2; i++) {
            let number = parseInt(s.charAt(0) + s.charAt(1));
            result += (number+1);
        }

        if (result === s) {
            console.log('YES' + ' ' + result.charAt(0) + result.charAt(1));

        } else console.log('NO');

    }
}

seperate('1234');
seperate('91011');
seperate('99100');
seperate('010203');
