// const longest = (lines) => {
//
//     let number = lines[0];
//
//     lines.shift();
//
//     console.log(lines);
//
//     lines.sort(function (a, b) { return (a-b) });
//
//     console.log(lines);
// }

const longest = (lines) => {

    let number = lines[0];

    lines.shift();

    lines.sort((a,b) => {return b.length - a.length;});

    console.log(lines);

    for(let i = 0; i < number; i++) {
        console.log(lines[lines.length-1-i])
    }
}

longest([2, "ello", " ", "why r u herre", "Jkcdbhckdbjkdsabcjbsjkvbsjkbsdjc"]);