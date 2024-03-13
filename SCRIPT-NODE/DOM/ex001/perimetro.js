function perimetro(){
    let alt = prompt("Digite a altura do retângulo:")
    let larg = prompt("Digite a largura do retângulo:")
    let perimetro = 2*alt + 2*larg
    let area = alt * larg
    console.log(perimetro)
    alert(`O perímetro é: ${perimetro}`)
    console.log(area)
    alert(`A área é: ${area}`)
}
function idade(){

    let nascimento = prompt("Digite o ano de nascimento:")
    let atual = prompt("Digite o ano atual:")
    let idade = atual-nascimento
    console.log(idade)
    alert(`A idade é: ${idade}`)
}
function calcularDesconto(){   
    let preco = prompt("Digite um valor:")
    let desconto = prompt("Digite o valor do desconto:")
    let novoPreco = preco*((100-desconto)/100)
    console.log(novoPreco)
    alert(`Novo Preço é: ${novoPreco}`)
}
function temperatura(){
    let temp = prompt("Digite o valor da temperatura:") 
    let fahrenheit = (temp * (9/5) + 32)
    console.log(fahrenheit)
    alert(`A temperatura em F é ${fahrenheit}`)

}