document.getElementById('form-dados').addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário
    console.log(enviarFormulario())
  });

  // Adiciona um ouvinte de evento para o botão Limpar
  document.getElementById('form-dados').addEventListener('reset', () => {
    limparFormulario();
  });

function enviarFormulario() {
    // Obtém os valores dos campos do formulário

    // Obtém o valor do cargo selecionado
    const cargo = document.querySelector('input[name="cargo"]:checked');
    const cargoSelecionado = cargo ? cargo.id : '';

    const areasInteresse = document.querySelectorAll('input[name="area-interesse[]"]:checked');
    const areasInteresseSelecionadas = Array.from(areasInteresse).map(function (checkbox) {
      return checkbox.value;
    })

    // Obtém o valor do mini currículo
    const miniCurriculo = document.getElementById('mini-curriculo').value;

    const objeto = {
        nome: document.getElementById('nome').value,
        endereco: document.getElementById('endereco').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        cargo: areasInteresseSelecionadas,
        curriculo: miniCurriculo
    }

    return objeto
};




function limparFormulario() {
    // Limpa todos os campos do formulário
    document.getElementById('form-dados').reset();
}