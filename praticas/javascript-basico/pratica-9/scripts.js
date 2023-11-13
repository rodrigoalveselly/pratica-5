// // Exercicio 1
function exercicio1() {
    const resultado = document.getElementById('exercicio1')
    const produto = {
        nome: 'Mouse',
        valor: 90
    }
    
    resultado.innerHTML = `Nome: ${produto.nome}, Valor: R$ ${produto.valor}`
}



// Exercicio 2
function exercicio2() {
    const resultado = document.getElementById('exercicio2')
    let descricao = ``
    const notebook = {
        processador: 'i7',
        memoria: '16GB',
        preco: 5000,
        hd: '1TB',
        ssd: '256GB'
    }
    
    for (const config in notebook) {
        descricao += `${config} = ${notebook[config]} <br />`
    }

    resultado.innerHTML = descricao
}




// // Exercicio 3
function exercicio3() {
    const resultado = document.getElementById('exercicio3')
    const turma = []
    let boletim = ``
    let mediaTurma = 0
    
    const aluno1 = {
        nome: 'Rodrigo',
        nota1: 7.5,
        nota2: 8
    }
    
    turma.push(aluno1)
    
    const aluno2 = {
        nome: 'Julio',
        nota1: 9,
        nota2: 5.5
    }
    
    turma.push(aluno2)
    
    
    for (let aluno of turma) {
        let mediaAluno = (aluno.nota1 + aluno.nota2) / 2
        mediaTurma += mediaAluno
        boletim += `Aluno: ${aluno.nome}, Nota 1: ${aluno.nota1}, Nota 2: ${aluno.nota2}, Média: ${mediaAluno} <br />`
    }
    
    mediaTurma = (mediaTurma / 2)
    boletim += `A media da turma foi de ${mediaTurma}`
    resultado.innerHTML = boletim

}



// Exercicio 4
function exercicio4() {
    const resultado = document.getElementById('exercicio4')
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
