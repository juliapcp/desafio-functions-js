// trim.js // 0.4 pts

// 0.1 pts // easy
function trimLeft(txt){
    let i = 0;
    while(txt[i] === ' '){
        txt = txt.substring(1);
    }
    return txt;
}

function trimRight (txt){
    while()
}
let txt = '   palavra   ';
txt = trimLeft(txt);
console.log(txt); // palavra   
console.assert(txt === 'palavra   ');
console.assert(trimLeft(' a') === 'a');
console.assert(trimLeft('                 a') === 'a');
console.assert(trimLeft('a       ') === 'a       ');
console.assert(trimLeft(' a a ') === 'a a ');
console.assert(trimLeft('     ') === '');
console.assert(trimLeft('') === '');

// 0.2 pts // medium
// String, Number, RegExp, Math and Array methods, every built-in function not allowed
// except Array.length, Array[index], String.length, String.charAt and String[index]
console.assert(trimRight('   palavra   ') === '   palavra');
console.assert(trimRight('ifrs  ') === 'ifrs');
console.assert(trimRight('ifrs') === 'ifrs');
console.assert(trimRight('  ifrs') === '  ifrs');
console.assert(trimRight('  ifrs rio grande              ') === '  ifrs rio grande');
console.assert(trimRight('     ') === '');
console.assert(trimRight('') === '');

// 0.1 pts // easy to do, hard to figure it out how
// String, Number, RegExp, Math and Array methods, every **built-in** function not allowed
// **in the function body**, including [index] and length operations!
// just one line of code inside the function body (one `;`).
console.assert(trim('   palavra   ') === 'palavra');
console.assert(trim('ifrs  ') === 'ifrs');
console.assert(trim('ifrs') === 'ifrs');
console.assert(trim('  ifrs') === 'ifrs');
console.assert(trim('  ifrs rio grande  ') === 'ifrs rio grande');
console.assert(trim('        ') === '');
console.assert(trim('') === '');