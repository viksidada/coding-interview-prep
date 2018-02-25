const mars = (str) => {

    if (str.length%3 !== 0) {
        return;
    }

     let counter = 0;
     let signal = 'SOS';

     for (let i = 0; i < str.length; i += 3) {
         if (str.charAt(i) !== 'S') counter++;
         if (str.charAt(i+1) !== 'O') counter++;
         if (str.charAt(i+2) !== 'S') counter++;
     }

     console.log(counter);
}

mars('SOSLOO');