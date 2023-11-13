// Exercicio 1
function exercicio1() {
    const resultado = document.getElementById('exercicio1')
    const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    let pares = ``

    for (let numero of numeros) {
        if (numero % 2 === 0) {
            pares += `${numero}, `
        }
    }

    resultado.innerHTML = pares
}



// Exercicio 2
function exercicio2() {
    const resultado = document.getElementById('exercicio2')
    const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    let soma = 0
    
    for (numero of numeros) {
        soma += numero
    }
    
    resultado.innerHTML = soma
}



// Exercicio 3
function exercicio3() {
    const resultado = document.getElementById('exercicio3')
    let numerosPerfeitos = []

    for (let i = 1; numerosPerfeitos.length < 4; i++) { 
        let soma = 0 
        for (let j = 1; j <= i; j++) {
            if (i % j === 0 && i !== j) {
                soma += j
            }
        }
    
        if (soma === i) {
            numerosPerfeitos.push(i)
        }
    }
    
    resultado.innerHTML = numerosPerfeitos
}


// Exercicio 4
function exercicio4() {
    const resultado = document.getElementById('exercicio4')
    const numeros = [1,2,3,4,5,11,12,14,15,19,20]
    let chute = Number(prompt('Insira um numero:'))
    let resposta = false
    
    for (numero of numeros) {
        if (numero === chute) {
            resposta = true
        }
    }
    
    resposta ? resultado.innerHTML = `O seu chute ${chute} esta na lista` :  resultado.innerHTML = `O seu chute ${chute} não esta na lista`
}

// Exercicio 5
function exercicio5() {
    const resultado = document.getElementById('exercicio5')
    let nomes = []
    while (nomes.length < 5) {
        nomes.push(prompt('Digite o nome:'))
    }

    resultado.innerHTML = nomes.reverse()
}