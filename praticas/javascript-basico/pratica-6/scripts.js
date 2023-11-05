// Exercicio 1
function exercicio1() {
    const resultado = document.getElementById('exercicio1')
    const idade = Number(prompt('Insira sua idade: '))

    if (idade >= 18) {
        resultado.innerHTML = 'Pode dirigir!'
    } else {
        resultado.innerHTML = 'Não pode dirigir!'
    }
}


// Exercicio 2
function exercicio2() {
    const resultado = document.getElementById('exercicio2')
    const idade = Number(prompt('Insira sua idade: '))
    const cnh = prompt('Você possui CNH? (S/N)')

    if (idade >= 18 && cnh.toUpperCase() === "S") {
        resultado.innerHTML = 'Pode dirigir!'
    } else {
        resultado.innerHTML = 'Não pode dirigir!'
    }
}


// Exercicio 3
function exercicio3() {
    const resultado = document.getElementById('exercicio3')
    const diaNum = Number(prompt('Insira o dia da semana em numero: '))
    let diaSem 
    
    if (diaNum === 1) {
        diaSem = 'Domingo'
    } else if (diaNum === 2) {
        diaSem = 'Segunda-Feira'
    } else if (diaNum === 3) {
        diaSem = 'Terça-Feira'
    } else if (diaNum === 4) {
        diaSem = 'Quarta-Feira'
    } else if (diaNum === 5) {
        diaSem = 'Quinta-Feira'
    } else if (diaNum === 6) {
        diaSem = 'Sexta-Feira'
    } else if (diaNum === 7) {
        diaSem = 'Sábado'
    } else {
        diaSem = 'Data invalida!'
    }

    resultado.innerHTML = `Hoje é ${diaSem}`    
}


// Exercicio 4
function exercicio4() {
    const resultado = document.getElementById('exercicio4')
    const diaNum = Number(prompt("Insira o dia da semana: "))
    let diaSem

    switch (diaNum) {
        case 1:
            diaSem = "Domingo"
            break
        case 2:
            diaSem = "Segunda-feira"
            break
        case 3:
            diaSem = "Terça-feira"
            break
        case 4:
            diaSem = "Quarta-feira"
            break
        case 5:
            diaSem = "Quinta-feira"
            break
        case 6:
            diaSem = "Sexta-feira"
            break
        case 7:
            diaSem = "Sabado"
            break
        default:
            diaSem = "Dia Invalido"
            break
    }

    resultado.innerHTML = `Hoje é ${diaSem}` 
}


//Exercicio 5
function exercicio5() {
    const resultado = document.getElementById('exercicio5')
    let pares = ''

    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            pares += `${i} `
        }
    }
    
    resultado.innerHTML = pares
}


// Exercicio 6
function exercicio6() {
    const resultado = document.getElementById('exercicio6')
    let i = 0
    let impares = ''
    let contaImpares = 0
    
    
    while (contaImpares <= 30) {
        i++
        if (i % 2 !== 0) {
            contaImpares++
            impares += `${i} `
        }
    }
    resultado.innerHTML = impares
}


// Exercicio 7
function exercicio7() {
    const resultado = document.getElementById('exercicio7')
    let soma = 0
    let i = 10
    
    do {
        soma += i
        i++
    } while (i <= 100)
    
    resultado.innerHTML = soma
}


// Exercicio 8
function exercicio8() {
    const resultado = document.getElementById('exercicio8')
    let salario = Number(prompt("Insira o seu sálario: "))
    let limiteIsencao = 1903.98
    
    if (salario < limiteIsencao) {
        resultado.innerHTML = 'ISENTO DE IR'
    } else {
        resultado.innerHTML = 'TRIBUTADO NO IR'
    }
}


// Exercicio 9
function exercicio9() {
    const resultado = document.getElementById('exercicio9')
    let numero = Number(prompt("Insira até qual numero deseja ver os numeros primos: "))
    let primo = false
    
    for (let i = 2; i < numero; i++) {

        if (numero % i === 0) {
            primo = false
            break
        } else {
            primo = true
        }
    }

    if (primo) {
        resultado.innerHTML = `${numero} é primo`
    } else {
        resultado.innerHTML = `${numero} não é primo`
    }
}


// Exercicio 10
function exercicio10() {
    const resultado = document.getElementById('exercicio10')
    let altura = Number(prompt('Insira sua altura: (EX: 1.75) '))
    let sexo = Number(prompt('Insira 1 para sexo feminino e 2 para sexo masculino'))
    let pesoIdeal = 0
    
    if (sexo === 1) {
        pesoIdeal = (62.1 * altura) - 44.7
    } else {
        pesoIdeal = (72.7 * altura) - 58
    }
    
    resultado.innerHTML = pesoIdeal
}


// Exercicio 11
function exercicio11() {
    const resultado = document.getElementById('exercicio11')
    let turno = prompt("Em qual turno você estuda? (M = Matutino; V = Vespertino; N = Noturno")
    let mensagem
    
    switch (turno.toUpperCase()) {  
        case "M":
            mensagem = "Bom dia"
            break;
        case "V":
            mensagem = "Boa tarde"
            break;
        case "N":
            mensagem = "Boa noite"
            break;
        default:
            mensagem = "Valor invalido"
            break;
    }
    
    resultado.innerHTML = mensagem
}


// Exercicio 12
function exercicio12() {
    const resultado = document.getElementById('exercicio12')
    let idade = Number(prompt('Qual sua idade? '))

    if (idade >= 18 && idade <= 67) {
        resultado.innerHTML = 'Pode doar sangue!'
    } else {
        resultado.innerHTML = 'Não pode doar sangue!'
    }   
}


// Exercicio 13 
function exercicio13() {
    const resultado = document.getElementById('exercicio13')
    let numero = Number(prompt('Insira um numero: '))
    let impares = ''

    for (let i = 1; i <= numero; i++) {
        if (i % 2 !== 0) {
            impares += `${i} `
        }
    }
    
    resultado.innerHTML = impares
}


// Exercicio 14
function exercicio14() {
    const resultado = document.getElementById('exercicio14')
    let numero = Number(prompt('Insira um numero: '))
    let soma = 0
    
    while (soma <= 500 - (numero * 3)) {
        soma += (numero * 3)
    }
    
    resultado.innerHTML = soma
}


// Exercicio 15
function exercicio15() {
    const resultado = document.getElementById('exercicio15')
    let a = Number(prompt('Insira um numero: '))
    let b = Number(prompt('Insira um numero: '))
    let c = Number(prompt('Insira um numero: '))
    let classificacao
    
    if (a < b + c && b < a + c && c < a + b) {
        if (a === b && b === c) {
            classificacao = 'Triângulo Esquilátero'
        } else if (a !== b && a !== c && b !== c) {
            classificacao = 'Triângulo Escaleno'
        } else {
            classificacao = 'Triângulo isósceles'
        }
    } else {
        classificacao = 'Não é um triangulo!'
    }

    resultado.innerHTML = classificacao
}


// Exercicio 16
function exercicio16() {
    const resultado = document.getElementById('exercicio16')
    let anoAtual = new Date().getFullYear()
    let anoNascimento = Number(prompt('Insira o ano de seu nascimento:'))
    let idade = anoAtual - anoNascimento
    let situacao
    
    if (idade >= 18 && idade <= 65) {
        situacao = `Você possui ${idade} anos e é OBRIGADO a votar este ano!`
    } else if (idade >= 16 || idade > 65) {
        situacao = `Você possui ${idade} anos e o seu voto é opcional!` 
    } else {
        situacao = `Você possui ${idade} anos e você ainda não pode votar!`
    }

    resultado.innerHTML = situacao
}


// Exercicio 17 
function exercicio17() {
    const resultado = document.getElementById('exercicio17')
    let eleitores = Number(prompt('Insira o numero de eleitores: '))
    let votosBrancos = Number(prompt('Insira o numero de votos brancos: '))
    let votosNulos = Number(prompt('Insira o numero de votos nulos :'))
    let votosValidos = eleitores - (votosBrancos + votosNulos)
    
    votosBrancos = (votosBrancos/eleitores) * 100
    votosNulos = (votosNulos/eleitores) * 100
    votosValidos = (votosValidos/eleitores) * 100
    
    resultado.innerHTML = `Total de Eleitores do Municipio: ${eleitores}<br />` +
    `Votos Brancos: ${votosBrancos}% <br />` +
    `Votos Nulos: ${votosNulos}% <br />` +
    `Votos Valido: ${votosValidos}%`    
}


// Exercicio 18
function exercicio18() {
    const resultado = document.getElementById('exercicio18')
    let precoTabela = Number(prompt('Insira o preço de tabela: '))
    let formaPagamento = Number(prompt('Insira em quantas vezes o pagamento será feito: '))
    let valorTotal = 0
    let valorParcela = 0
    
    if (formaPagamento === 1) {
        valorTotal = precoTabela * 0.975
    } else if (formaPagamento > 1 && formaPagamento <= 5) {
        valorTotal = precoTabela
        valorParcela = valorTotal / formaPagamento
    } else if (formaPagamento > 5 && formaPagamento <= 10) {
        valorTotal = precoTabela * 1.06
        valorParcela = valorTotal / formaPagamento
    } else if (formaPagamento <= 15) {
        valorTotal = precoTabela * 1.13
        valorParcela = valorTotal / formaPagamento
    }

    if (formaPagamento === 1) { 
        resultado.innerHTML = `O valor total ficou R$ ${valorTotal} com pagamento à vista!`
    } else if (formaPagamento > 1 && formaPagamento <= 15) {
        resultado.innerHTML = `O valor total ficou R$ ${valorTotal.toFixed(2)} com pagamento em ${formaPagamento}x de R$ ${valorParcela.toFixed(2)}`
    } else {
        resultado.innerHTML = `O parcelamento máximo é até 15x`
    }    
}






