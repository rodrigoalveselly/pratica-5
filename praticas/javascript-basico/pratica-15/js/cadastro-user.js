cadastroUserForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name-cadastro").value
    const email = document.getElementById("email-cadastro").value
    const password = document.getElementById("password-cadastro").value


    const newUser = {
        name,
        email,
        password
    }

    cadastrarUser(newUser)
    // saveAccount(newUser)
        
    // alert("Conta criada com sucesso!")
    // 
})


// function saveAccount(user) {
//     let users = JSON.parse(localStorage.getItem('users/singup')) || []
//     users.push(user)
//     localStorage.setItem('users', JSON.stringify(users))
// }


async function cadastrarUser(user) {
    try {
        const response = await api.post('/users/signup', user)
        
        if (response.status === 200) {
            location.href = "index.html"
        }
    } catch (error) {
        console.log('Erro: ', error)
    }
}