const data = [
    {
        nome: 'Roger Medeiros',
        sexo: 'M',
        salario: 3250,
    },
    {
        nome: 'Carolina Silva',
        sexo: 'F',
        salario: 1200,
    },
    {
        nome: 'Cristina Avila',
        sexo: 'F',
        salario: 8100,
    },
    {
        nome: 'Gustavo Hoffman',
        sexo: 'M',
        salario: 5200.35,
    },
    {
        nome: 'Eva Trindade',
        sexo: 'F',
        salario: 2501,
    },
    {
        nome: 'Andre Mathias',
        sexo: 'M',
        salario: 1750,
    },
    {
        nome: 'Joice Castro da Silva',
        sexo: 'F',
        salario: 3350.25,
    },
]

// // Exercicio 1
function exercicio1() {
    const resultado = document.getElementById('exercicio1')
    resultado.innerHTML = `Total de Pessoas: ${data.length}`
}



// Exercicio 2
function exercicio2() {
    const resultado = document.getElementById('exercicio2')
    let mulheres = 0
    data.forEach(pessoa => {
        if (pessoa.sexo === 'F') {
            mulheres++
        }  
    })

    resultado.innerHTML = `Total de Mulheres: ${mulheres}`
}




// // Exercicio 3
function exercicio3() {
    const resultado = document.getElementById('exercicio3')
    
    resultado.innerHTML = `R$ ${data.reduce((acumulador,pessoa) => acumulador + pessoa.salario,0).toFixed(2)}`

}


// Exercicio 4
function exercicio4() {
    const resultado = document.getElementById('exercicio4')


    resultado.innerHTML = `R$ ${(data.reduce((acumulador,pessoa) => acumulador + pessoa.salario,0) / data.length).toFixed(2)}`
}

// Exercicio 5
function exercicio5() {
    const resultado = document.getElementById('exercicio5')

    resultado.innerHTML = `R$ ${data.filter(pessoa => pessoa.sexo === 'M').reduce((acumulador,pessoa) => acumulador + pessoa.salario,0).toFixed(2)}`
}

// Exercicio 6
function exercicio6() {
    const resultado = document.getElementById('exercicio6')
    const homens = data.filter(pessoa => pessoa.sexo === 'M')
    resultado.innerHTML = `R$ ${(homens.reduce((acumulador,pessoa) => acumulador + pessoa.salario,0) / homens.length).toFixed(2)}` 
}

// Exercicio 7
function exercicio7() {
    const resultado = document.getElementById('exercicio7')
    
    resultado.innerHTML = data.some(pessoa => pessoa.salario > 7000) ? true : false
}

// Exercicio 8
function exercicio8() {
    const resultado = document.getElementById('exercicio8')
    
    resultado.innerHTML = data.findIndex(pessoa => pessoa.nome === 'Eva Trindade')
}

// Exercicio 9
function exercicio9() {
    const resultado = document.getElementById('exercicio9')
    const sobrenomes = data.filter(pessoa => pessoa.nome.includes('Silva'))
    resultado.innerHTML = sobrenomes.map(pessoa => pessoa.nome)
}

// Exercicio 10
function exercicio10() {
    const resultado = document.getElementById('exercicio10')

    resultado.innerHTML = data.map(pessoa => pessoa.nome)
}
