// Exercicio 1
function exercicio1() {
    const resultado = document.getElementById('exercicio1')
    let nomes = ['Lucas', 'Leovaldo', 'Leonardo', 'Leomir']
    let exibidor = ''


    for (nome of nomes) {
        exibidor += `${nome} <br />`
        // console.log(nome)
    }

    resultado.innerHTML = exibidor
}



// Exercicio 2
function exercicio2() {
    const resultado = document.getElementById('exercicio2')
    let numeros = [4,3,9,16,21]
    let soma = 0
    
    for (numero of numeros) {
        soma += numero
    }
    
    resultado.innerHTML = soma
}



// Exercicio 3
function exercicio3() {
    const resultado = document.getElementById('exercicio3')
    let frutas = []

    for (let i = 0;i <= 2;i++) {
        frutas[i] = prompt(`Insira uma fruta para adicionar no array: (${i+1}/3)`)
    }
    
    let adicionarFinal = prompt('Adicione mais uma fruta no Array na posição final')
    frutas.push(adicionarFinal)
    alert(`O array atual é ${frutas}`)
    

    frutas.pop()
    alert('A posição final do array foi removida com .pop()')
    alert(`O array atual é ${frutas}`)

    let adicionarInicial= prompt('Adicione mais uma fruta no Array na posição inicial')
    frutas.unshift(adicionarInicial)
    alert(`O array atual é ${frutas}`)

    frutas.shift()
    alert('A posição inicial do array foi removida com .shift()')
    
    resultado.innerHTML = `O array final é ${frutas}`
}



