function liberarAcesso() {

    let idade = document.getElementById('idade').value;
    let nome = document.getElementById('nome').value;

    if (idade == '' || nome == '') {
        alert('Favor informar a idade/nome!')
    } else if (idade >= 60) {
        console.log(`Na melhor idade! Entrada Free! ${nome}`);
    } else if (idade >=18 && idade < 60) {
        alert(`Pode entrar! ${nome}`)
    } 
    else {
        console.log(`Foi barrado no baile! ${nome}`);
    } 

}

// function liberarAcesso(idade, nome) {

//     if (idade >= 18 && idade < 60) {
//         console.log(`Pode entrar! ${nome}`);
//     } else if (idade >= 60) {
//     console.log(`Na melhor idade! Entrada Free! ${nome}`);
//     } else {
//         console.log(`Foi barrado no baile! ${nome}`);
//     }
// }

// liberarAcesso(75, 'Angelo');
// liberarAcesso(16, '');