function calcularDesconto(){   
    let preco = prompt("Digite um valor:")
    let desconto = prompt("Digite o valor do desconto:")
    let novoPreco = preco*((100-desconto)/100)
    console.log(novoPreco)
    alert(`Novo Preço é: ${novoPreco}`)
}


