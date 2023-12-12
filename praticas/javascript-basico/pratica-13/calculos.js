let realTimeCalculations = false

function somarReceita() {
    const valorBase = Number(document.getElementById('valor_base').value)
    const auxilioTransporte = Number(document.getElementById('valor_transporte').value)
    const auxilioAlimentacao = Number(document.getElementById('valor_alimentacao').value)
    document.getElementById('valor_receita').value = valorBase + auxilioTransporte + auxilioAlimentacao
}

function somarDescontos() {
    const descontoAutomovel = Number(document.getElementById('valor_automovel').value)
    const faltas = Number(document.getElementById('faltas').value)
    document.getElementById('valor_descontos').value = descontoAutomovel + faltas
}

function calcularTotal() {
    const receitaTotal = Number(document.getElementById('valor_receita').value)
    const descontoTotal = Number(document.getElementById('valor_descontos').value)
    document.getElementById('valor_total').value = receitaTotal - descontoTotal
}

btn_calcular.addEventListener("click", (e) => {
    somarReceita()
    somarDescontos()
    calcularTotal()
})

btn_realTime.addEventListener("click", () => {
    realTimeCalculations = true
})

document.addEventListener("input", (e) => {
    if (realTimeCalculations) {
        somarReceita()
        somarDescontos()
        calcularTotal()
    }
})


