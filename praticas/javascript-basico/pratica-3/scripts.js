// Exercicio 1

function exercicio1() {
    const resultado = document.getElementById('exercicio1')
    let altura = 0
    let minAltura = 1000
    let maxAltura = 0
    
    for (let i = 1; i <= 5; i++) {
        altura = Number(prompt('Insira a altura (EX:1.75): '))
        
        if (altura > maxAltura) {
            maxAltura = altura
        } 
        
        if (altura < minAltura) {
            minAltura = altura
        }
    }
    
    resultado.innerHTML = `<p>Altura maxima: ${maxAltura} m</p>` + `<p>Altura minima: ${minAltura} m</p>`
}



// // Exercicio 2

function exercicio2() {
    const resultado = document.getElementById('exercicio2')
    let alturaPedro = 150
    let alturaLucas = 110
    let anos = 0
    
    
    for (let i = 1; alturaLucas < alturaPedro; i++) {
        alturaPedro += 2
        alturaLucas += 3
        anos = i
    }
    
    resultado.innerHTML = `Em ${anos} anos Lucas e Pedro terão a mesma altura <br />` + `Em ${anos+1} anos Lucas será maior que Pedro`
}



// // Exercicio 3

function exercicio3() {
    const resultado = document.getElementById('exercicio3')
    const numero = Number(prompt("Insira o numero que deseja saber a tabuada"))
    const multiplicador = Number(prompt("Insira até quanto deseja ver a tabuada"))
    let i = 0
    let tabuada = ""
    
    
    while (i < multiplicador) {
        i++
        let valorFinal = numero * i
        tabuada += `${numero} x ${i} = ${valorFinal} <br />`
    }

    resultado.innerHTML = tabuada
}




// // Exercicio 4

function exercicio4() {
    const resultado = document.getElementById('exercicio4')
    const numero = 250
    let contadorM3 = 0
    let contadorM5 = 0
    
    for (let i = 1; i <= numero; i++) {
        if (i % 3 === 0) {
            contadorM3++
        }

        if (i % 5 === 0) {
            contadorM5++
        }
    }
    
    resultado.innerHTML = `Numero multiplos de 3 entre 1 e 250: ${contadorM3} <br />` +  `Numero multiplos de 5 entre 1 e 250: ${contadorM5}`
}



// // Exercicio 5

function exercicio5() {
    const resultado = document.getElementById('exercicio5')
    let numero = Number(prompt("Digite um valor: "))
    let contagem = ""
    
    for (let i = 0; i <= numero; i++) {
        contagem += `${i}, `
    }
    contagem += "FIM!"
    resultado.innerHTML = contagem
}





// // Exercicio 6
function exercicio6() {
    const resultado = document.getElementById('exercicio6')
    let divisiveis = 0
    let numero = Number(prompt("Insira até qual numero deseja ver os numeros primos: "))
    let sequencia = ""
    
    for (let i = numero; i > 0; i--) {
    
        for (let j = 1; j <= numero; j++) {
            if (i % j === 0 && i % 1 === 0) {
                divisiveis++
            } 
        }
        
        if (divisiveis === 2) {
            sequencia += `<strong>[${i}]</strong> `
        } else {
            sequencia += `${i} `
        }
        divisiveis = 0
    }
    
    resultado.innerHTML = sequencia
}


// // Exercicio 7
function exercicio7() {
    const resultado = document.getElementById('exercicio7')
    let nLeitura = 5
    let soma = 0
    let positivos = 0
    let negativos = 0
    
    
    for (let i = 1; i <= nLeitura; i++) {
        let numero = Number(prompt("Insira um numero: "))
        soma += numero
        if (numero > 0) {
            positivos++
        } else {
            negativos++
        }
    }
    
    let media = soma / nLeitura
    let positivoPerCent = (positivos/nLeitura)*100
    let negativoPerCent = (negativos/nLeitura)*100
    
    resultado.innerHTML = `A média dos ${nLeitura} numeros inseridos é ${media} <br />` +
    `Entre os numeros, há ${positivos} positivo(s) e ${negativos} negativo(s). <br />` +
    `Isto representa ${positivoPerCent}% de numeros positivos e ${negativoPerCent}% de numeros negativos`
    
}

