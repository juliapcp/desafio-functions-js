/* Especificar, implementar e testar a Cifra de Vigenère.Especificar envolve definir a função, nome, parâmetros, entradas válidas e inválidas, respostas esperadas, tudo coberto por casos de teste em situações normais e excepcionais(entradas inválidas ou sujas).A especificação é por sua conta.

- Easy way(0.5 pts): todas as funções / métodos embutidas do JS permitidas;
- Hard way(1.0 pts): todas as funções / metodos embutidas do JS proibidas exceto Array.length, Array[index], String.length, String.charAt and String[index].
*/

// vigenere.js // 1 pt

function v_encrypt(msg, key) {
    let newmsg = '';
    if (msg.length !== 0 && msg[0] !== undefined && key[0] !== undefined){
        msg = lowercase(msg);
        key = lowercase(key);
        let v = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', []];
        let ck = 0;
        let c1 = 0;
        let c = 0;
        for (let i = 0; i < key.length; i++) {
            do {
                if (key[i] === v[c]) {
                    v[26].push(c);
                    c = 0;
                    break;
                }
                else if (c === v.length - 2) {
                    return undefined;
                }
                c++;
            } while (c < v.length - 1);
        }
        for (let i = 0; i < msg.length; i++, ck++){
            ck = ck === key.length ? 0 : ck;
            do {
                if (msg[i] === v[c1]){
                    newmsg += v[(v[26][ck]+c1)%26];
                    c1 = 0;
                    break;
                }
                else if (c1 === v.length - 2) {
                    newmsg += msg[i];
                    c1 = 0;
                    ck--;
                    break;
                }
                c1++;
            } while (c1 < v.length); 
        }
    } else if (msg === ''){
        return newmsg;
    } else return undefined; 
    return newmsg;
}

// criptografar uma string por meio da Cifra de Vigenère
// String, Number, RegExp, Math and Array methods, every built-in function not allowed.
// except Array.length, Array[index], String.length, String.charAt and String[index].
// entradas: 
// msg - qualquer caractere.
// key - [A-Z], [a-z].
// saída: sempre em letra minuscula, decifrando apenas os caracteres [A-Z], [a-z] e ignorando outros algarismos.

console.assert(v_encrypt('vigenere', 'cifra') === 'xqlvngzj');  //true
console.assert(v_encrypt('CifRa', 'viGEnerE') === 'xqlvn');  //true
console.assert(v_encrypt('', 'dbo') === '');  //true
console.assert(v_encrypt('trabalho funcoes', '') === undefined);  //true
console.assert(v_encrypt('$73(doce de banana 2.0', 'KeyWord') === '$73(nsaa rv ekryjo 2.0');  //true
console.assert(v_encrypt(123, 'dbo') === undefined);  //true
console.assert(v_encrypt('functions', 123) === undefined);  //true
console.assert(v_encrypt('functions', '123') === undefined);  //true

