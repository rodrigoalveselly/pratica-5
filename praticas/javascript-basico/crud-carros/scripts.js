const veiculos = [
    {
        id: 61,
        modelo: 'Truck',
        marca: 'Ford',
        ano: 2021,
        cor: 'Branco',
        preco: 35000
      },
      {
        id: 38,
        modelo: 'SUV',
        marca: 'Toyota',
        ano: 2022,
        cor: 'Branco',
        preco: 20000
      },
      {
        id: 2,
        modelo: 'Truck',
        marca: 'Honda',
        ano: 2022,
        cor: 'Azul',
        preco: 35000
      },
      {
        id: 17,
        modelo: 'Hatchback',
        marca: 'Toyota',
        ano: 2022,
        cor: 'Preto',
        preco: 30000
      },
      {
        id: 27,
        modelo: 'Truck',
        marca: 'Ford',
        ano: 2021,
        cor: 'Vermelho',
        preco: 35000
      },
      {
        id: 12,
        modelo: 'Truck',
        marca: 'Chevrolet',
        ano: 2021,
        cor: 'Preto',
        preco: 30000
      },
      {
        id: 76,
        modelo: 'Hatchback',
        marca: 'Chevrolet',
        ano: 2021,
        cor: 'Azul',
        preco: 25000
      },
      {
        id: 58,
        modelo: 'SUV',
        marca: 'Ford',
        ano: 2020,
        cor: 'Vermelho',
        preco: 30000
      },
      {
        id: 78,
        modelo: 'Truck',
        marca: 'Toyota',
        ano: 2020,
        cor: 'Branco',
        preco: 20000
      },
      {
        id: 41,
        modelo: 'Hatchback',
        marca: 'Ford',
        ano: 2022,
        cor: 'Preto',
        preco: 25000
      }
]

let id = 0

function tamanhoLista(carros, palavraChave = false) {
    const localNumero = document.getElementById("numero-cars")
    const localTexto = document.getElementById("text-cars")

    localNumero.innerHTML = veiculos.length

    if (!!palavraChave) {
        localTexto.innerHTML = `Exibindo ${carros.length} resultados para a busca "${palavraChave}"`
    } else {
        localTexto.innerHTML = `Resultado atualizado conforme parametros de pesquisas`
    }
}

function cadastrarVeiculos() {
    
    if (veiculos.length) {
        veiculos.forEach(veiculo => {
            id += veiculo.id;
        })
    } else {
        id = 1
    }

    const modelo = prompt('Insira o modelo do veiculo: ')
    const marca = prompt('Insira a marca do veiculo: ')
    const ano = Number(prompt('Insira o ano do veiculo: '))
    const cor = prompt('Insira a cor do veiculo: ')
    const preco = Number(prompt('Insira o preço do veiculo: '))
   
    if (!modelo || !marca || !ano || !cor || !preco) return alert('Erro nos dados inseridos. Verifique os dados!')
    
    const newCar = {
        id,
        modelo,
        marca,
        ano,
        cor,
        preco
    }

    veiculos.push(newCar)
    tamanhoLista(veiculos)
    listarVeiculos(veiculos)
}


function listarVeiculos(veiculos) {
    const localTabela = document.getElementById("tabela-carros")
    veiculos.sort((a,b) => a.preco - b.preco)

    let listaCarros = `                
    <tr>
    <th>ID</th>
    <th>Modelo</th>
    <th>Marca</th>
    <th>Ano</th>
    <th>Cor</th>
    <th>Preço</th>
    </tr>`

    veiculos.forEach(veiculo => {
        listaCarros += `
        <tr>
        <td>${veiculo.id}</td>
        <td>${veiculo.modelo}</td>
        <td>${veiculo.marca}</td>
        <td>${veiculo.ano}</td>
        <td>${veiculo.cor}</td>
        <td>${veiculo.preco.toFixed(0)}</td>
        </tr>
        `
    })

    localTabela.innerHTML = listaCarros
    tamanhoLista(veiculos)
}


function atualizarVeiculo() {
    const idEdit = Number(prompt('Insira o ID do veiculo que quer editar: '))
    const index = veiculos.findIndex(veiculo => veiculo.id === idEdit)
    
    if (index < 0) return alert('ID não encontrado. Verifique os dados!')

    const newCor = prompt('Insira a cor do veiculo: ')
    const newPreco = Number(prompt('Insira o preço do veiculo: '))

    veiculos[index].cor = newCor
    veiculos[index].preco = newPreco

    listarVeiculos(veiculos)
}


function removerVeiculo() {
    const idRemove = Number(prompt('Insira o ID do veiculo que quer remover: '))
    const index = veiculos.findIndex(veiculo => veiculo.id === idRemove)

    if (index < 0) return alert('ID não encontrado. Verifique os dados!')

    veiculos.splice(index,1)

    tamanhoLista(veiculos)
    listarVeiculos(veiculos)
}


function filtrarMarca() {
    const marcaFiltrar = prompt('Insira a marca de veiculo que quer filtrar: ')
    const veiculosFiltrados = veiculos.filter(veiculos => veiculos.marca === marcaFiltrar)

    listarVeiculos(veiculosFiltrados)
    tamanhoLista(veiculosFiltrados, marcaFiltrar)
}


function filtrarPreco() {
    const minPrice = Number(prompt('Insira o preço minimo: '))
    const maxPrice = Number(prompt('Insira o preço maximo: '))
    const veiculosFiltrados = veiculos.filter(veiculo => veiculo.preco <= maxPrice && veiculo.preco >= minPrice)
    const palavraChave = `"De R$ ${minPrice} até R$ ${maxPrice}"; `

    listarVeiculos(veiculosFiltrados)
    tamanhoLista(veiculosFiltrados, palavraChave)

}


function maiorPreco() {
    const maior = veiculos.sort((a,b) => a.preco - b.preco).pop()

    alert(`O veiculo mais caro é:\n ID: ${maior.id} || Modelo: ${maior.modelo} || Marca: ${maior.marca} || Ano: ${maior.ano} || Cor: ${maior.cor} || Preço: ${maior.preco}`)
}


function mediaPreco() {
    let media = veiculos.reduce((acumulador, veiculo) => acumulador + veiculo.preco, 0) / veiculos.length;
    console.log(media)

    alert(`A média de preço de todos carros da lista é de R$ ${media.toFixed(2)}`)
}


function aumentarPreco() {
    const taxaAumento = Number(prompt('Em quantos % deseja aumentar o preço? EX: 5'))
    const veiculosAumentados = veiculos.map(veiculo => {
        veiculo.preco = veiculo.preco * (1 + (taxaAumento / 100))
        return veiculo
    })

    listarVeiculos(veiculosAumentados)
    
}


function removerCarroVelho() {
    const idade = Number(prompt('Deseja ver carros com até quantos anos? '))
    const dataAtual = new Date().getFullYear()
    const veiculosFiltrados = veiculos.filter(veiculo => dataAtual - veiculo.ano <= idade)

    listarVeiculos(veiculosFiltrados)
    tamanhoLista(veiculosFiltrados, idade)
}

function contarCor() {
    const contagemCores = veiculos.reduce((contagem, veiculo) => {
        const cor = veiculo.cor
        contagem[cor] = (contagem[cor] || 0) + 1;
        return contagem
    }, {})

    const resultadoFormatado = Object.entries(contagemCores)
    .map(([cor, quantidade]) => `${cor}: ${quantidade} \n`)
    .join('');
    alert(resultadoFormatado);
}



function contarMarca() {
    let contagemMarca = veiculos.reduce((contagem, veiculo) => {
        const marca = veiculo.marca

        if (!contagem[marca]) {
            contagem[marca] = {
                modelos: []
            };
        }

        let carro = {
            modelo: veiculo.modelo,
            ano: veiculo.ano,
            cor: veiculo.cor,
            preco: veiculo.preco
        }

        contagem[marca].modelos.push(carro)

        return contagem
    }, {})

    const resultadoFormatado = Object.entries(contagemMarca)
        .map(([marca, carros]) => {
            const modelosFormatados = carros.modelos
                .map(
                    (modelo) =>
                        `Modelo: ${modelo.modelo}, Ano: ${modelo.ano}, Cor: ${modelo.cor}, Preço: ${modelo.preco}`
                )
                .join('\n');

            return `${marca}:\n${modelosFormatados}\n`;
        })
        .join('');

    alert(resultadoFormatado);
}



function pesquisar() {
    const palavraChave = prompt('Insira uma palavra-chave para filtrar veiculos: \n (Ex: Branco, 2020, Ford)')
    const veiculosFiltrados = veiculos.filter(veiculo => veiculo.cor.includes(palavraChave) || veiculo.modelo.includes(palavraChave) || veiculo.marca.includes(palavraChave) || veiculo.ano == palavraChave)

    listarVeiculos(veiculosFiltrados)
    tamanhoLista(veiculosFiltrados, palavraChave)

}

function filtrosCruzados() {
    let palavraChave = ``
    let veiculosFiltrados = []
    const filtroCor = confirm('Deseja inserir um filtro de cor? ')
    if (filtroCor) {
        let corFiltro = prompt('Qual cor deseja filtrar?')
        palavraChave += `"${corFiltro}"; `
        veiculosFiltrados = veiculos.filter(veiculo => veiculo.cor === corFiltro)
    }

    const filtroMarca = confirm('Deseja inserir um filtro de marca? ')
    if (filtroMarca) {
        let marcaFiltro = prompt('Qual marca deseja filtrar?')
        palavraChave += `"${marcaFiltro}"; `
        veiculosFiltrados = veiculosFiltrados.filter(veiculo => veiculo.marca === marcaFiltro)
    }
   
    const filtroAno = confirm('Deseja inserir um filtro de ano? ')
    if (filtroAno) {
        let minAnoFiltro = Number(prompt('Insira A PARTIR de que ano quer ver carros'))
        let maxAnoFiltro = Number(prompt('Insira ATÉ que ano quer ver carros'))
        palavraChave += `"De ${minAnoFiltro} até ${maxAnoFiltro}"; `
        veiculosFiltrados = veiculosFiltrados.filter(veiculo => veiculo.ano >= minAnoFiltro && veiculo.ano <= maxAnoFiltro)
    }

    const filtroPreco = confirm('Deseja inserir um filtro de preço?')
    if (filtroPreco) {
        const minPrice = Number(prompt('Insira o preço minimo: '))
        const maxPrice = Number(prompt('Insira o preço maximo: '))
        palavraChave += `"De R$ ${minPrice} até R$ ${maxPrice}"; `
        veiculosFiltrados = veiculosFiltrados.filter(veiculo => veiculo.preco >= minPrice && veiculo.preco <= maxPrice)
    }

    if (veiculosFiltrados.length) {
        listarVeiculos(veiculosFiltrados)
        tamanhoLista(veiculosFiltrados, palavraChave)
    } else {
        alert('Não há nenhum carro nestes parametros')
    }
    
}  