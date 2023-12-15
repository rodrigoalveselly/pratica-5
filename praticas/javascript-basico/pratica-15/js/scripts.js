const messagesContainer = document.querySelector('.messages-list')

const prevPage = document.getElementById('prev-btn')
const nextPage = document.getElementById('next-btn')
const numberPage = document.getElementById('pageNumbers')

// Variáveis globais
let currentPage = 1
let totalPages = 1


async function fetchMessages(page) {
  try {
    const params = {
        page,
        perPage: 3
    }
  
    const userId = localStorage.getItem('userId')
    const response = await api.get(`/notes/${userId}`, { params })
    const messages = response.data.userMessages

    
    totalPages = response.data.totalPages
    numeroPaginas()

    messagesContainer.innerHTML = ''

    messages.forEach(message => {
      const messageCard = document.createElement('div')
      messageCard.classList.add('card')

      messageCard.innerHTML = `
        <h2 class="card-title">${message.title}</h2>
        <p class="card-description">${message.description}</p>
        <div class="card-icons">
            <i class="fas fa-solid fa-trash" data-id=${message.id}></i>
            <i class="fas fa-regular fa-edit" data-id=${message.id}></i>
        </div>
      `

    messagesContainer.appendChild(messageCard)

    const deleteIcon = messageCard.querySelector('.fa-trash')

    deleteIcon.addEventListener('click', () => {
        const messageId = deleteIcon.getAttribute('data-id')

        deleteMessage(messageId)
    })

    const editIcon = messageCard.querySelector('.fa-edit')
        editIcon.addEventListener('click', () => {
        const messageId = editIcon.getAttribute('data-id')

        navigateToEditPage(messageId)
    })

    })

    if (messages.length === 0) {
      const h3 = document.createElement('h3')
      h3.textContent = 'Nenhum recado cadastrado.'
      messagesContainer.appendChild(h3)
    }
  } catch (error) {
    console.log('Erro ao buscar mensagens', error)
  }
}

function navigateToEditPage(messageId) {
    location.href = `editar-recado.html?id=${messageId}`
 }

fetchMessages(currentPage)

function navigateToEditPage(messageId) {
    location.href = `editar-recado.html?id=${messageId}`
}
  
prevPage.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--
        fetchMessages(currentPage)
    }
})
  
nextPage.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        fetchMessages(currentPage)
    }
})


function numeroPaginas() {
    let pages = ``
    for (let i = 1; i <= totalPages; i++){
        if (currentPage === i) {
            pages += `<button class="pagina-atual" onclick="getPage(${i})">${i}</button>`
        } else {
            pages += `<button onclick="getPage(${i})">${i}</button>`
        }
    }

    numberPage.innerHTML = pages 
}

function getPage(page) {
    currentPage = page
    fetchMessages(page)
}