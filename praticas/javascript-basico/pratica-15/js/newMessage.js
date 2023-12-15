const formNewMessage = document.getElementById('formMessage')
const title = document.querySelector('#title-input')
const description = document.querySelector('#description-input')

formNewMessage.addEventListener('submit', (e) => {

    e.preventDefault()

    const titleValue = title.value
    const descriptionValue = description.value
    const userId = localStorage.getItem('userId')

    if (!userId) {
        alert('Você precisa estar cadastrado para cadastrar recado')
    }

    const newMessage = {
        title: titleValue,
        description: descriptionValue,
        userId
    }

    createNewMessage(newMessage)
})


async function createNewMessage(message) {
    try {
      const response = await api.post('/notes/', message)
  
      if (response.status === 201) {
        alert('Recado cadastrado com sucesso!')

        title.value = ""
        description.value = ""
        
        location.href = 'mostrar-recado.html'
  
      }
    } catch (error) {
      console.log('Erro ao cadastrar recado', error)
    }
  }