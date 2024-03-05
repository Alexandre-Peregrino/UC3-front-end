function temperatura(){
    let temp = prompt("Digite o valor da temperatura:") 
    let fahrenheit = (temp * (9/5) + 32)
    console.log(fahrenheit)
    alert(`A temperatura em F é ${fahrenheit}`)

}