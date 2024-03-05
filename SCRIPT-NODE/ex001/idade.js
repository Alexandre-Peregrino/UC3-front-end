function idade(){

    let nascimento = prompt("Digite o ano de nascimento:")
    let atual = prompt("Digite o ano atual:")
    let idade = atual-nascimento
    console.log(idade)
    alert(`A idade é: ${idade}`)
}