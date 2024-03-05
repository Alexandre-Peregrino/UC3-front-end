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