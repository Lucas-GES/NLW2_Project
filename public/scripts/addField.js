//procurar o botao
document.querySelector("#add-time") // seleciona o elemento pelo id
//Quando clicar no botao
.addEventListener('click', cloneField) // adiciona um evento que espera o click para execultar uma ação

//Executar uma acao
function cloneField() {
    //Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    
    //para cada campo, limpar
    fields.forEach(function(field) { //um for para selecionar a function e limpa o valor do field para vazio
        //pegar o field do momento e limpa ele
        field.value = ""
    })

    //Colocar na pagina. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    

    