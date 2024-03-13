function insert(num){
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado + num;
    //acessar o visor
    //inserir ou concatenar a entrada recebida na function
}
function clean(){
    document.getElementById('resultado').innerHTML = "";
    //apagar visor
}

function back(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length-1);
    // function back() voltar 1
}

// function calcular() {
//     let resultado = document.getElementById('resultado').innerHTML;

//     // Verificar se o último caractere é um número antes de calcular
//     if (!isNaN(resultado.charAt(resultado.length - 1))) {
//         // Verificar se há um ponto decimal consecutivo
//         resultado = resultado.replace(/(\d+)\.(\d+)\./, '$1.$2');
        
//         document.getElementById('resultado').innerHTML = eval(resultado);
//     } else {
//         document.getElementById('resultado').innerHTML = "None";
//     }
// }
function calcular(){
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }else
    {
        document.getElementById('resultado').innerHTML = "None";
    }
    // function calcular()
}
