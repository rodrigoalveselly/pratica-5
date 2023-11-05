// Exercicio 1 
function exercicio1() {
    const resultado = document.getElementById('exercicio1')
    let idade = 0
    let soma = 0
    let contador = 0
    let continuar = true

    while (continuar) {
        
        idade = Number(prompt('Insira a idade: '))

        if (idade === 999) {
            continuar = false
        } else {
            soma += idade
            contador++
        }

    }

    let media = soma / contador

    resultado.innerHTML = `<p>Existem ${contador} alunos na turma e a média de idade é ${media.toFixed(2)} anos</p>`
}


// Exericio 2 
function exercicio2() {
    const resultado = document.getElementById('exercicio2')
    let salario = 0
    let sexo
    let salarioHomem = 0
    let salarioMulher = 0
    let continuar = true

    while (continuar) {
        salario = Number(prompt('Qual seu salario? '))
        sexo = prompt('Qual seu sexo? (M -> Masculino/F -> Feminino) ')

        if (sexo.toUpperCase() === "M") {
            salarioHomem = salario
        } else if (sexo.toUpperCase() === "F") {
            salarioMulher = salario
        } else {
            alert('Sexo invalido!')
            continue
        }

        continuar = confirm('Deseja inserir mais um funcionario?')
    }

    resultado.innerHTML = `O total pago para os homens é de R$ ${salarioHomem} e o total pago para as mulheres é de R$ ${salarioMulher}`
}


// Exercicio 3
function exercicio3() {
    const resultado = document.getElementById('exercicio3')
    let valorInicial = Number(prompt('Insira o valor inicial: '))
    let valorFinal = Number(prompt('Insira o valor final: '))
    let incremento = Number(prompt('Insira o valor incremento: '))
    let sequencia = ''

    for (let i = valorInicial; i <= valorFinal;) {
        sequencia += `${i} `
        i += incremento
    }
    sequencia += 'Acabou!'

    resultado.innerHTML = sequencia
}

// Exercico 4
function exercicio4() {
    const resultado = document.getElementById('exercicio4')
    let nome = prompt('Qual seu nome (EX: João): ')
    let sexo = prompt('Qual seu sexo (M -> Masculino/F -> Feminino): ')
    let valorCompras = Number(prompt('Qual valor das compras (EX: 1500): '))
    const descontoHomem = 0.05
    const descontoMulher = 0.13

    if (!isNaN(valorCompras) && valorCompras > 0) {
        if (sexo.toUpperCase() === "M") {
            valorCompras = valorCompras * (1-descontoHomem)
        } else if (sexo.toUpperCase() === "F") {
            valorCompras = valorCompras * (1-descontoMulher)
        } else {
            alert('Sexo invalido!')
        }
    } else {
        alert('Valor incorreto! Confira o valor das suas compras.')
    }

    resultado.innerHTML = `${nome}, o valor final da sua compra com desconto ficou R$ ${valorCompras}`
}


// Exercicio 5
function exercicio5() {
    const resultado = document.getElementById('exercicio5')
    let distancia = Number(prompt('Insira a distancia que deseja percorrer: '))
    const viagemCurta = 0.5
    const viagemLonga = 0.45
    let valorPassagem = 0

    if (distancia <= 200) {
        valorPassagem = distancia * viagemCurta
    } else {
        valorPassagem = distancia * viagemLonga
    }

    resultado.innerHTML = `O valor da passagem é R$ ${valorPassagem}`
}


// Exercicio 6
function exercicio6() {
    const resultado = document.getElementById('exercicio6')
    let largura = Number(prompt('Insira a largura do terreno: '))
    let comprimento = Number(prompt('Insira o comprimento do terreno: '))
    let area = largura * comprimento
    let classificação

    if (area < 100) {
        classificação = 'Terreno Popular'
    } else if (area > 100 && area < 500) {
        classificação = 'Terreno Master'
    } else {
        classificação = 'Terreno VIP'
    }

    resultado.innerHTML = `O terreno possui uma area de ${area}m2 e é classificado como ${classificação}`
}