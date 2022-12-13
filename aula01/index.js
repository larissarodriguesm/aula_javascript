function calcularDesconto () {
    
    // variável que contém o valor do produto que o usuário quer saber o desconto
    let valorProduto = document.getElementById ('preco').value;

    // variável que contem o valor do produto com descocnto de 20% (0.2)
    let resultado = valorProduto - (valorProduto * 0.2)
    console.log(resultado)

    // Transforma para decimal e com duas casas decimais, ficando no formato de moeda.
    let resultadoFormatado = parseFloat(resultado).toFixed(2);

    // Exibe o texto com o valor formatado para reais (R$)
    let textoResultado = `O valor do desconto de 20% do produto é: R$ ${resultadoFormatado}`;
    
    // Exibe o texto da variável textoResultado dentro da tag h3
    document.getElementsByTagName('h3')[0].innerHTML = textoResultado
}