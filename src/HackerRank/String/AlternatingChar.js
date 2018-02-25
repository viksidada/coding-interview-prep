const alternate = (s) => {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(1) === s.charAt(1+1)) {
            count++;
        }
    }

    return count;
}