let pais = 'Brasil';
console.log(pais);

// transformando para maiúscula
console.log(pais.toUpperCase())
console.log(pais.toLowerCase())

let frase = 'Um país continental';
console.log(pais + ' ' + frase)

// concatenando string utilizando o template string (com crase ``), forma atualizada de concatenação.
//console.log(`${pais} ${frase}`)
let fraseCompleta = `O ${pais} é um pais continental`
console.log(fraseCompleta.replace('continental','tropical'));

console.log(fraseCompleta.length);

