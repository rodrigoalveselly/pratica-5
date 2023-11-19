// // Exercicio 1
function exercicio1() {
    const resultado = document.getElementById('exercicio1')
    const mediaAluno = (notas, metodo) => {
        let somaNota = 0
        let somaPeso = 0
        const peso = [5,3,2]
    
        if (metodo === "A") {
            for (let nota of notas) {
                somaNota += nota
            }
            
            let media = somaNota / notas.length
            return media
        } else if (metodo === "P") {
            for (let i = 0; i<notas.length;i++) {
                somaNota += notas[i] * peso[i]
                somaPeso += peso[i]
            }
    
            let media = somaNota / somaPeso
            return media
        }
    }
    
    const notas = [9,4,5]
    const metodo = 'P'
    
    resultado.innerHTML = mediaAluno(notas,metodo)
}



// Exercicio 2
function exercicio2() {
    const resultado = document.getElementById('exercicio2')
    const teste = Number(prompt('Insira um numero'))
    const verificaNumero = (numero) => {
        if (numero % 2 === 0) {
            return false
        } else {
            return true
        }
    }

    resultado.innerHTML = verificaNumero(teste)
}




// // Exercicio 3
function exercicio3() {
    const resultado = document.getElementById('exercicio3')
    const teste = Number(prompt('Insira um numero'))
    const verificaPrimo = (numero) => {
        let primo = false
        if (numero === 2 || numero === 1) return true
    
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
            primo = false
            break
            } else {
            primo = true
            }
        }

        return primo
    }
    resultado.innerHTML = verificaPrimo(teste)

}



// Exercicio 4
function exercicio4() {
    const resultado = document.getElementById('exercicio4')
    const transformaTempo = (segundos) => {
        let hora = Math.floor(segundos / 3600)
        segundos %= 3600
        let minuto = Math.floor(segundos / 60)
        segundos %= 60 
    
        return `${hora}:${minuto}:${segundos}`
    }
    
    resultado.innerHTML = transformaTempo(3672)
}


// Exercicio 5
function exercicio5() {
    const resultado = document.getElementById('exercicio5')
    const teste = Number(prompt('Insira um numero'))
    const verificaPerfeito = (numero) => {
        let soma = 0 
        for (let j = 1; j < numero; j++) {
            if (numero % j === 0) {
                soma += j
            }
        }
        return soma === numero 
    }
    
    resultado.innerHTML = verificaPerfeito(teste)
}


// Exercicio 6
function exercicio6() {
    const resultado = document.getElementById('exercicio6')
    const acessoAoSite = () => {
        alert('Bem vindo ao site')
        return 'Alerta exibido com sucesso!'
    }
    
    resultado.innerHTML = acessoAoSite()
}



// Exercicio 7
function exercicio7() {
    const resultado = document.getElementById('exercicio7')
    const mostrarMensagem = () => {
        const nomeAplicacao = 'Aplicação de Teste'
        console.log(`Acesso à aplicação ${nomeAplicacao}`)
        alert(`Bem vindo à aplicação ${nomeAplicacao}`)
        return 'Alerta e Log exibidos com sucesso!'
    }
    
    resultado.innerHTML = mostrarMensagem()
}


// Exercicio 8
function exercicio8() {
    const resultado = document.getElementById('exercicio8')
    const teste = Number(prompt('Insira um numero'))
    const mostrarDobro = (numero) => {
        console.log(`O dobro do número ${numero} é ${numero * 2}`)
        return `Log exibido com sucesso! <br /> O dobro do número ${numero} é ${numero * 2}`
    }
    
    resultado.innerHTML = mostrarDobro(teste)
}


// Exercicio 9
function exercicio9() {
    const resultado = document.getElementById('exercicio9')
    const nome = prompt('Insira seu nome: ')
    const nota1 = Number(prompt('Insira um nota 1'))
    const nota2 = Number(prompt('Insira um nota 2'))
    const nota3 = Number(prompt('Insira um nota 3'))
    const calcularMedia = (nota1, nota2, nota3, nome) => {
        let media = (nota1 + nota2 + nota3)/3
        console.log(`${nome}, sua média é ${media.toFixed(2)}`)
        return `Logo exibido com sucesso <br /> ${nome}, sua média é ${media.toFixed(2)}` 
    }
    
    resultado.innerHTML = calcularMedia(nota1,nota2,nota3,nome)
}

