// // Exercicio 1
function exercicio1() {
    const resultado = document.getElementById('exercicio1')
    const salarios = [5000.00, 5460.50, 3452.00,6900.00, 7590.10,8012.99,1290.00,15000.00]

    const primeiroGrandeSalario = salarios.findIndex(salario => salario > 7500)
    const maioresSalarios = salarios.filter(salario => salario > 8000)
    
    resultado.innerHTML = `a: ${primeiroGrandeSalario} <br /> b: ${maioresSalarios}`
}



// Exercicio 2
function exercicio2() {
    const resultado = document.getElementById('exercicio2')
    const rainbow = ['Vermelho', 'Laranja', 'Preto', 'Azul']

    rainbow.splice(2,1,'Amarelo', 'Verde')
    rainbow.splice(rainbow.length,0,'Roxo')

    resultado.innerHTML = rainbow
}


// Exercicio 3
function exercicio3() {
    const resultado = document.getElementById('exercicio')
    const pessoas = []
    let continuar = true
    let resposta = ``
    
    while (continuar) {
        const nome = prompt("Digite o seu nome:")
        const idade = Number(prompt("Digite a sua idade"))
        const estaTrabalhando = confirm('Você esta trabalhando atualmente? (OK = SIM/CANCELAR = NÃO)')
        let salario = 0
    
        if (estaTrabalhando) {
            salario = Number(prompt("Digite o salario"))
        }
    
        const pessoa = {
            nome,
            idade,
            estaTrabalhando,
            salario
        }
    
        pessoas.push(pessoa)
    
        continuar = confirm('Quer cadastrar outra pessoa?')
    
    }
    
    
    resposta += '<strong>Pessoas desempregadas:</strong><br />'
    for (pessoa of pessoas) {
        if (!pessoa.estaTrabalhando) {
            resposta += `Nome: ${pessoa.nome}, Idade: ${pessoa.idade} <br />`
        }
    }
    
    resposta += '<br /> <strong>Pessoas empregadas com salários menores que 2500:</strong> <br />'
    for (pessoa of pessoas) {
        if (pessoa.salario < 2500 && pessoa.salario !== 0) {
            resposta += `Nome: ${pessoa.nome}, Idade: ${pessoa.idade} <br />`
        }
    }
    
    resposta += '<br /><strong>Pessoas empregadas com salários maiores que 2500:</strong> <br />'
    for (pessoa of pessoas) {
        if (pessoa.salario >= 2500) {
            resposta += `Nome: ${pessoa.nome}, Idade: ${pessoa.idade} <br />`
        }
    }

    resultado.innerHTML = resposta
}
