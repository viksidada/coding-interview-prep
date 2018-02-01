// File name says it all

const palendrome = (str) => {
    const reversed = str.split('').reverse().join('');

    return (str === reversed);
};

console.log('Is ' + 'viksidada' + ' a palendrome? ' + palendrome('viksidada'));

console.log('Is ' + 'abcba' + ' a palendrome? ' + palendrome('abcba'));
