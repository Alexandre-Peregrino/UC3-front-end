let lista = document.getElementById('lista')
let tarefa = document.getElementById('tarefa')
let botao = document.getElementById('adicionar')

function add(event){
    event.preventDefault() //pra não recarregar a página e apagar a informação
    if(!tarefa.value){
      alert('Preencha o campo tarefa')
      return
    }
    let item = document.createElement('li') //cria elemento 'li' e armazena na variável item
    item.textContent = tarefa.value // Define o texto do novo item de lista como o valor atual do campo de entrada com o id "tarefa". O valor desse campo representa uma nova tarefa que o usuário digitou.
    item.addEventListener("click", concluido)
    let excluir = document.createElement('button')
    excluir.textContent = "Remover"
    excluir.classList.add("botaoRemover")
    excluir.addEventListener('click', remover)
    item.appendChild(excluir)
    lista.appendChild(item)
    tarefa.value = ""
}
botao.addEventListener('click', add)

function concluido(){
  this.classList.add("concluido");
}

function remover(event){
  let itemExcluir = event.target.parentElement
  itemExcluir.remove()
}
