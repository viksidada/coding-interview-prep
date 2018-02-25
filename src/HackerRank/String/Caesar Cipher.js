
const cipher = (str, numberOfRotations) => {

    if (str.length === 0) {
        return;
    }

    let encryption = '';

outer:  for(let i = 0; i < str.length; i++) {
    let value = str.charCodeAt(i);

    if ((value < 97 || value > 122) && (value < 65 || value > 90)) {
        encryption += str[i];
        continue;
    }

    value += numberOfRotations;

    if (value < 90 && value > 97) {
        value = value - 90 + 64;
    } else if (value > 122) {
        value = value - 122 + 96;
    }

    encryption += String.fromCharCode(value);
  }

  return encryption;
}

console.log(cipher('159357lcfds', 98));

