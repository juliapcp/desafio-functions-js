/* Especificar, implementar e testar a Cifra de Vigenère.Especificar envolve definir a função, nome, parâmetros, entradas válidas e inválidas, respostas esperadas, tudo coberto por casos de teste em situações normais e excepcionais(entradas inválidas ou sujas).A especificação é por sua conta.

- Easy way(0.5 pts): todas as funções / métodos embutidas do JS permitidas;
- Hard way(1.0 pts): todas as funções / metodos embutidas do JS proibidas exceto Array.length, Array[index], String.length, String.charAt and String[index].
*/

function v_encrypt(msg, key) {
    msg = msg.toLowerCase();
    const v = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', []];
    let newmsg = '';
    let ck = 0;
    for (let i = 0; i < key.length; i++) {
        for (let c = 0; c < v.length - 1; c++) {
            if (key[i] === v[c]) {
                v[26].push(c);
            }
        }
    }
    for (let i = 0; i < msg.length; i++, ck++){
        ck = ck === key.length ? 0 : ck;
        for (let c = 0; c < v.length - 1; c++) {
            if (msg[i] === v[c]){
                newmsg += v[(v[26][ck]+c)%26];
            }
        }
    }
    return newmsg;
}

console.log(v_encrypt('docura', 'lalala'));