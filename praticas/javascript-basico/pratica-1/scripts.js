const exercicio1 = () => {
    const idade = 25

    document.write(`<p>A minha idade é ${idade} anos</p>`)
}


const exercicio2 = () => {
    const x = 33
    const y = 15

    const z = x + y
    document.write(`<p>O resultado da soma é ${z}</p>`)
}


const exercicio3 = () => {
    const totalCompra = 149.9
    const formaPagamento = "prazo"
    const nParcelas = 2
    
    const valorParcela = totalCompra / nParcelas
    
    document.write(`<p>O valor total da compra foi R$ ${totalCompra}</p>`)
    if (formaPagamento === "a vista") {
        document.write(`<p>A forma de pagamento: 1x de R$ ${totalCompra}</p>`)
    } else {
        document.write(`<p>A forma de pagamento: ${nParcelas}x de R$ ${valorParcela}</p>`)
    }
}



const exercicio4 = () => {
    const minutos = 120
    const segundos = minutos * 60

    document.write(`<p>${minutos} minutos equivale à ${segundos} segundos</p>`)
}



const exercicio5 = () => {
    const aluno = "Rodrigo"
    const nota1 = 6
    const nota2 = 7
    const nota3 = 5
    
    const media = (nota1 + nota2 + nota3) / 3
    
    document.write(`<p>O aluno ${aluno} ficou com média ${media}</p>`)
}



const exercicio6 = () => {
    let a = 10
    let b = 20
    const reserva = a

    a = b
    b = reserva

    document.write(`<p>Variavel A: ${a}</p>`)
    document.write(`<p>Variavel B: ${b}</p>`)    
} 



const exercicio7 = () => {
    const resultado = document.getElementById('exercicio7')
    const totalEleitores = Number(prompt('Insira o TOTAL DE ELEITORES:'))
    let votosBrancos =  Number(prompt('Insira o TOTAL DE VOTOS BRANCOS:'))
    let votosNulos =  Number(prompt('Insira o TOTAL DE VOTOS NULOS:'))
    let votosValidos = totalEleitores - (votosBrancos + votosNulos)
    
    votosBrancos = (votosBrancos / totalEleitores) * 100
    votosNulos = (votosNulos / totalEleitores) * 100
    votosValidos = (votosValidos / totalEleitores) * 100
    
    
    resultado.innerHTML = `<p>Votos Totais: ${totalEleitores}</p>` + 
    `<p>Votos Validos: ${votosValidos.toFixed(2)}%</p>` + 
    `<p>Votos Brancos: ${votosBrancos.toFixed(2)}%</p>` + 
    `<p>Votos Nulos: ${votosNulos.toFixed(2)}%</p>`
}




const exercicio8 = () => {
    const resultado = document.getElementById('exercicio8')
    const valor1 = Number(prompt('Insira o VALOR 1: ')) 
    const valor2 =  Number(prompt('Insira o VALOR 2: '))
    
    if (valor1 === valor2) {
        resultado.innerHTML = `<p>NUMEROS IGUAIS!</p>` +
        `<p>O primeiro valor ${valor1} é igual ao segundo valor ${valor2}</p>`
    } else if (valor1 > valor2) {
        resultado.innerHTML = `<p>PRIMEIRO É MAIOR!</p>` +
        `<p>O primeiro valor ${valor1} é MAIOR que o segundo valor ${valor2}</p>`
    } else {
        resultado.innerHTML = `<p>SEGUNDO É MAIOR!</p>` +
        `<p>O segundo valor ${valor1} é MAIOR que o primeiro valor ${valor2}</p>`
    }
}



const exercicio9 = () => {
    const resultado = document.getElementById('exercicio9')
    const nVendas = Number(prompt('Quantas maças você deseja comprar? ')) 

    if (nVendas < 12) {
        const maca = 0.30
        const valorTotal = maca * nVendas
        resultado.innerHTML = `<p>O valor total foi de R$ ${valorTotal.toFixed(2)}</p>`
    } else {
        const maca = 0.25
        const valorTotal = maca * nVendas
        resultado.innerHTML = `<p>O valor total foi de R$ ${valorTotal.toFixed(2)}</p>`
    }
}



const exercicio10 = () => {
    const resultado = document.getElementById('exercicio10')
    const nome = prompt("Insira seu nome: ")
    const idade = Number(prompt("Insira sua idade: "))
    const anoAtual = new Date().getFullYear()
    const anoNascimento = anoAtual - idade
    
    resultado.innerHTML = `<p>Nome: ${nome}, Idade: ${idade} anos, nasceu em ${anoNascimento}</p>`
}




const exercicio11 = () => {
    const resultado = document.getElementById('exercicio11')
    const numero = Number(prompt("Insira um numero: "))

    if (numero % 2 === 0) {
        resultado.innerHTML = `<p>O numero ${numero} é PAR!</p>`
    } else {
        resultado.innerHTML = `<p>O numero ${numero} é IMPAR</p>`
    }
}



const exercicio12 = () => {
    const resultado = document.getElementById('exercicio12')
    const anoAtual = new Date().getFullYear()
    const anoNascimento = Number(prompt("Em qual ano você nasceu? "))
    const idade = anoAtual - anoNascimento

    if (idade >= 16) {
        resultado.innerHTML = `<p>Você possui ${idade} anos e já pode votar este ano!</p>`
    } else {
        resultado.innerHTML = `<p>Você possui ${idade} anos e ainda não pode votar este ano!</p>`
    }
}