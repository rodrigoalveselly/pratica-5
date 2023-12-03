function greeting() {
    const name = prompt('Insira seu nome')
    // const paragrafo = document.getElementById('paragrafo')
    const paragrafo = document.querySelector('p')
    console.log(paragrafo)

    paragrafo.innerText = `"E aí ${name} Você está deixando o seu site dinâmico."`
}

let clique = 0


function incrementar() {
    clique++
    const paragrafo = document.getElementById('resultado')
    paragrafo.innerText = `O contador está com ${clique} cliques.`
}

function zerar() {
    clique = 0
    const paragrafo = document.getElementById('resultado')
    paragrafo.innerText = `O contador está com ${clique} cliques.`
}