const cards = document.querySelectorAll('.card')

cards.forEach(card => {
    card.style.backgroundColor = '#e16e0e'
    card.style.color = '#2b385b'
})

const titles = document.querySelectorAll('.titulo-card')

titles.forEach(title => {
    title.style.marginTop = '10px'
    title.innerText = 'Meu card'
})



const descriptions = document.querySelectorAll('.descricao-card')

descriptions.forEach(description => {
    description.style.marginTop = '30px'
    description.style.color = 'white'
    description.innerText = 'Descrição modificada pelo JavaScript'
})

const btnEditar = document.querySelectorAll('.botao-editar')

btnEditar.forEach(btn => {
    btn.style.backgroundColor = 'green'
    btn.style.color = 'white'
    btn.style.padding = '10px'
    btn.style.borderRadius = '10px'
    btn.style.boxShadow = 'none'
    btn.style.border = 'none'
    btn.style.marginTop = '25px'
    btn.setAttribute('onclick', 'editarCard()')
    btn.style.cursor = 'pointer'

})


const btnExcluir = document.querySelectorAll('.botao-apagar')

btnExcluir.forEach(btn => {
    btn.style.backgroundColor = 'red'
    btn.style.color = 'white'
    btn.style.padding = '10px'
    btn.style.borderRadius = '10px'
    btn.style.boxShadow = 'none'
    btn.style.border = 'none'
    btn.style.marginTop = '25px'
    btn.setAttribute('onclick', 'apagarCard()')
    btn.style.cursor = 'pointer'

})


function editarCard() {
    alert('Clicou em Editar!')
}

function apagarCard() {
    const confirmar = confirm('Tem certeza que deseja apagar o card?')

    if (confirmar) {
        alert('Confirmado!')
    } else {
        alert('Cancelou')
    }
}


