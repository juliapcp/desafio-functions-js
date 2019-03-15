// caesar.js // 1.0 pts

// 0.1 pts // easy
// encrypt a string
// unrestricted
// input: a to z lowercase only,
// without accents, special chars (symbols) and spaces
let msg = 'tads';
let shift = 1;
let resp = encrypt(msg, shift);
console.log(resp); // ubet
console.log(resp === 'ubet'); // true
console.assert(resp === 'ubet');

resp = encrypt(msg, 9);
console.log(resp); // cjmb
console.log(resp === 'cjmb'); // true
console.assert(resp === 'cjmb');

// 0.2 pts // medium
// encrypt a string
// unrestricted
// input: any character
// desconsider any non-a-to-z (accented letters, spaces, special chars (symbols), etc) to encrypt
// uppercase letters inputs must output lowercase letters
// PATCH
// console.assert(encrypt('BANANA', 3) === 'kjwjwj');
// console.assert(encrypt('teste criptografia', 3) === 'cnbcn larycxpajorj');
console.assert(encrypt('BANANA', 9) === 'kjwjwj');
console.assert(encrypt('teste criptografia', 9) === 'cnbcn larycxpajorj');
// -----
console.assert(encrypt('@#%%&*^nEo*<>;; @', 15) === '@#%%&*^ctd*<>;; @');

// 0.2 pts // medium
// decrypt a string
// unrestricted
// input: any character
// desconsider any non-a-to-z (spaces, special chars (symbols), etc) to decrypt
// output always in lowercase
// PATCH
// console.assert(decrypt('kjwjwj', 3) === 'banana');
// console.assert(decrypt('cnbcn larycxpajorj', 3) === 'teste criptografia');
// console.assert(decrypt('cnbcn larycxpajorj', 3) === 'teste criptografia');
console.assert(decrypt('kjwjwj', 9) === 'banana');
console.assert(decrypt('cnbcn larycxpajorj', 9) === 'teste criptografia');
// -----
console.assert(decrypt('@#%%&*^ctd*<>;; @', 15) === '@#%%&*^neo*<>;; @');

// 0.5 pts // hard
// encrypt and decrypt a string
// input: any character
// desconsider any non-a-to-z (spaces, special chars (symbols), etc)
// output always in lowercase
// String, Number, RegExp, Math and Array methods, every built-in function not allowed
// except Array.length, Array[index], String.length, String.charAt and String[index]
console.assert(encrypt('@# hard %çá', 30) === '@# levh %çá');
console.assert(decrypt('@# levh %çá', 30) === '@# hard %çá');
console.assert(encrypt('@# HARD %çá', 30) === '@# levh %çá');