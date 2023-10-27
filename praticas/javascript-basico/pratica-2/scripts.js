

// // exercicio 1

function exercicio1() {
    const resultado = document.getElementById('exercicio1')
    const tempCelsius = Number(prompt("Insira a temperatura em graus celsius: "))

    const tempFahrenheit = (tempCelsius * (5/9)) + 32
    resultado.innerHTML = `A temperatura é de ${tempFahrenheit.toFixed(2)} ºF`
}



// // exercicio 2

function exercicio2() {
    const resultado = document.getElementById('exercicio2')
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



// // exercicio 3

function exercicio3() {
    const resultado = document.getElementById('exercicio3')
    const numero = Number(prompt("Insira o numero a ser verificado "))

    if (numero > 0) {
        resultado.innerHTML = `O numero ${numero} é POSITIVO`
    } else if (numero < 0) {
        resultado.innerHTML = `O numero ${numero} é NEGATIVO`
    } else {
        resultado.innerHTML = `O numero é ZERO`
    }
}



// // exercicio 4

function exercicio4() {
    const resultado = document.getElementById('exercicio4')
    const custoFabrica = Number(prompt("Insira o custo de fabrica do carro: "))
    const distribuidor = 0.28
    const impostos = 0.45
    
    const precoCarro = (custoFabrica * distribuidor) + (custoFabrica * impostos) + custoFabrica
    
    resultado.innerHTML = `O preço final do carro é ${precoCarro.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
}



// // exercicio 5 

function exercicio5() {
    const resultado = document.getElementById('exercicio5')
    const altura = Number(prompt("Insira a altura EX:1.75: "))
    const peso = Number(prompt("Insira o peso: "))
    
    const imc = peso / (altura ** 2)
    
    
    if (imc < 18.5) {
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)}! Você está abaixo da faixa de peso ideal`
    } else if (imc > 24.99) {
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)}! Você está acima da faixa de peso ideal`
    } else {
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)}! Você está dentro da faixa de peso ideal`
    }
}



// // exercicio 6 

function exercicio6() {
    const resultado = document.getElementById('exercicio6')
    const num1 = Number(prompt("Insira o numero 1: "))
    const num2 = Number(prompt("Insira o numero 2: "))
    const operacao = prompt("Insira qual operação deseja fazer: SOMA, SUBTRAÇÃO, DIVISÃO ou MULTIPLICAÇÃO")
    let valorFinal
    
    
    switch (operacao.toLowerCase()) {
        case "soma":
            valorFinal = num1 + num2
            break
        case "subtração":
            valorFinal = num1 - num2
            break
        case "divisão":
            valorFinal = num1 / num2
            break
        case "multiplicação":
            valorFinal = num1 * num2
            break
        default:
            valorFinal = "Operação invalida!"
    }
    
    resultado.innerHTML = `O resultado foi ${valorFinal}`

}



// // exercicio 7
function exercicio7() {
    const resultado = document.getElementById('exercicio7')
    const taxaSaque = 4.50
    let saldoBancario = 2000
    
    let saque = Number(prompt(`Seu saldo é ${saldoBancario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}. Quanto deseja sacar? `))
    
    if (saque > 0 && saque % 5 === 0 && (saque + taxaSaque) < saldoBancario) {
        saldoBancario = saldoBancario - (saque + taxaSaque)
        resultado.innerHTML = `Você sacou ${saque.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}. Seu saldo atual é de ${saldoBancario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
    } else if ((saque + taxaSaque) > saldoBancario) {
        resultado.innerHTML = `Valor excede o saldo disponivel de ${saldoBancario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
    } else {
        resultado.innerHTML = `Valor invalido. O caixa possui notas de R$ 200, R$ 100, R$ 50, R$ 20, R$ 10, R$ 5!`
    }
}



// // exercicio 8 


function exercicio8() {
    const resultado = document.getElementById('exercicio8')
    const idade = Number(prompt("Insira a idade "))
    const peso = Number(prompt("Insira o peso: "))
    let categoria
    
    
    if (idade <= 12) {
        categoria = "Infantil"
    
    } else if (idade >= 13 && idade <= 16) {
        if (peso <= 40) {
            categoria = "Juvenil Leve"
        } else {
            categoria = "Juvenil Pesado"
        }
    
    } else if (idade >= 17 && idade <= 24) {
        if (peso <= 45) {
            categoria = "Senior Leve"
        } else if (peso > 60) {
            categoria = "Senior Pesado"
        } else {
            categoria = "Senior Médio"
        }
    
    } else {
        categoria = "Veterano"
    }
    
    resultado.innerHTML = `Categoria: ${categoria}`
}


// // exercicio 9

function exercicio9() {
    const resultado = document.getElementById('exercicio9')
    const velocidadeCarro = Number(prompt("Insira a velocdade do carro: "))
    const limite = 80
    let excedido
    let multa
    
    
    if (velocidadeCarro > limite) {
        excedido = velocidadeCarro - limite
        multa = excedido * 5
        resultado.innerHTML = `MULTA DE R$ ${multa}! Você excedeu o limite de velocidade em ${excedido} Km/h`
    } else {
        resultado.innerHTML = "Use cinto de segurança. BOA VIAGEM!"
    }
}
