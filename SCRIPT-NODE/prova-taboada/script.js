
    let valor = document.querySelector("div.container input");
    let tabuada = document.querySelector("div.tabuada");
    const calcular = document.querySelector('div.container button')
     
    calcular.addEventListener("click", () => {

        if(Number(valor.value) < 1 || Number(valor.value) > 15){
            tabuada.innerHTML = "Insira um valor entre 1 e 15"
        }else{
            for(i = 1; i <=15; i++){

                calc = String(i) + "x" + valor.value + "=" + (i * Number(valor.value));

                let resultado = document.createElement("p");
                
                resultado.innerText = calc

                
                tabuada.appendChild(resultado)
            }
                
            
        }

    })

    