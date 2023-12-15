function getAccount(key) {
    const account = localStorage.getItem(key);

    if(account) {
        return JSON.parse(account);
    }

    return ""
}

loginForm.addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;

    const user = {
        email,
        password
    }

    login(user)

    // location.href = "mostrar-recado.html";


});

async function login(user) {
    try {
        const response = await api.post('/users/login', user)
        
        if (response.status === 200) {
            const userData = response.data

            localStorage.setItem('userId', userData.userId)
            location.href = "mostrar-recado.html";
        }
    } catch (error) {
        console.log('Erro: ', error)
    }
}