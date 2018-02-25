const reverseWordsString = (str) => {
    let myArray = str.split(' ');

    let answer = '';

    for (let x = 0; x < myArray.length; x++){
        answer += myArray[myArray.length-x-1] + ' ';
    }

    answer.trim();
    console.log(answer);
}

reverseWordsString("the sky is blue");