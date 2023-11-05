// Exercicio 1

function exercicio1() {
    const resultado = document.getElementById('exercicio1')
    let saque = Number(prompt('Qual o valor deseja sacar? '))
    let restante = 0
    
    if (!isNaN(saque) && saque > 0 && Number.isInteger(saque)) {
        let nota50 = parseInt(saque / 50)
        restante = saque % 50
    
        let nota10 = parseInt(restante / 10)
        restante = restante % 10
    
        let nota5 = parseInt(restante / 5)
        restante = restante % 5
    
        let nota1 = parseInt(restante)
    
    
        resultado.innerHTML = `Nota GC$ 50,00 -> ${nota50} <br />` +
        `Nota GC$ 10,00 -> ${nota10} <br />` +
        `Nota GC$ 5,00 -> ${nota5} <br />` +
        `Nota GC$ 1,00 -> ${nota1}`
    } else {
        alert('Valor invalido! Você deve sacar um valor inteiro maior que 0')
    }
    
    resultado.innerHTML = `<p>Altura maxima: ${maxAltura} m</p>` + `<p>Altura minima: ${minAltura} m</p>`
}


