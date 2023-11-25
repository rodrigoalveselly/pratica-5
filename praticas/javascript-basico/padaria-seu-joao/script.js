const cardapio = [
    {   
        id: 1,
        nome: 'Pão',
        preco: 3.99,
        estoque: 40
    },
    {   
        id: 2,
        nome: 'Bolo',
        preco: 4.99,
        estoque: 5
    },
    {   
        id: 3,
        nome: 'Queijo',
        preco: 16.99,
        estoque: 8
    }
]

const relatorioPedidos = [
    {
        nPedido: 1,
        data: new Date(2023, 10, 21, 10,30, 0),
        produtoPedido: [
            {
                produtoId: 2,
                quantidade: 2,
                preco: 9.99
            }
        ],
        precoTotal: 9.99
    },
    {
        nPedido: 2,
        data: new Date(2023, 10, 15, 15,30, 0),
        produtoPedido: [
            {
                produtoId: 3,
                quantidade: 3,
                preco: 19.99
            }
        ],
        precoTotal: 19.99
    },
    {
        nPedido: 3,
        data: new Date(2023, 10, 20, 16,30, 0),
        produtoPedido: [
            {
                produtoId: 1,
                quantidade: 10,
                preco: 99.99
            }
        ],
        precoTotal: 99.99
    },
]

let id = 0
let nPedido = 0


function cadastrarProduto() {
    let continuar = true

    while(continuar) {

        // Definindo o ID do produto
        if (cardapio.length) {
            cardapio.forEach(produto => {
                id += produto.id
            })
        } else {
            id = 1
        }

        // Recebendo dados do produto
        const nome = prompt('Nome do produto:')
        const preco = Number(prompt('Preço do Produto'))
        const estoque = Number(prompt('Estoque do Produto'))

        // Inserindo dados no objeto
        const produto = {
            id,
            nome,
            preco,
            estoque
        }

        // Inserindo objeto no array de cardapio
        cardapio.push(produto)

        // Adicionar outro produto ou sair do while
        continuar = confirm('Deseja adicionar outro produto?')
    }

    menu()
}

function listarProduto() {

    const ordenar = prompt('1 = Lista Simplificada\n2 = Lista Por Preço\n3 = Lista Alfabética')

    switch (ordenar) {
        case '1':
            listarProdutosSimplificada()
            break
        case '2':
            listarProdutosPreco()
            break
        case '3':
            listarProdutosAlfabetica()
            break
        default:
            alert('Opção Invalida')
            break
    }

    menu()
}


function listarProdutosSimplificada() {

    let stringProdutos = ``

    cardapio.forEach(produto => {

        stringProdutos += `ID: ${produto.id} | Nome: ${produto.nome} | Preço: R$ ${produto.preco} | Estoque: ${produto.estoque} \n`
    })  
    alert(stringProdutos)
    menu()
}


function listarProdutosPreco() {
    
    const listaFiltrada = cardapio.sort((a, b) => a.preco - b.preco)
    let stringProdutos = ``

    listaFiltrada.forEach(produto => {

        stringProdutos += `ID: ${produto.id} | Nome: ${produto.nome} | Preço: R$ ${produto.preco} | Estoque: ${produto.estoque} \n`
    })  
    alert(stringProdutos)
    menu()
}


function listarProdutosAlfabetica() {

    cardapio.sort(function (a, b) {
        if (a.nome > b.nome) {
            return 1
        }
        if (a.nome < b.nome) {
            return -1
        }
        return 0
    })
    const listaFiltrada = cardapio.sort((a, b) => a.nome > b.nome)

    let stringProdutos = ``

    cardapio.forEach(produto => {

        stringProdutos += `ID: ${produto.id} | Nome: ${produto.nome} | Preço: R$ ${produto.preco} | Estoque: ${produto.estoque} \n`
    })  
    alert(stringProdutos)
    menu()
}


function listarProdutosCaixa() {

    let stringProdutos = ``

    cardapio.forEach(produto => {

        stringProdutos += `ID: ${produto.id} | Nome: ${produto.nome} | Preço: R$ ${produto.preco} | Estoque: ${produto.estoque} \n`
    })  
    
    return stringProdutos
}


function editarProduto() {

    const idEdit = Number(prompt('ID do produto que quer editar'))
    const index = cardapio.findIndex(produto => produto.id === idEdit)

    if (index < 0) return alert('ID não encontrado. Verifique os dados!')

    const newNome = prompt('Edite o nome do Produto')
    const newPreco = Number(prompt('Edite o preço do Produto'))
    const newEstoque = Number(prompt('Edite a quantidade no estoque do Produto'))

    if (newEstoque < 1) return alert('O estoque não pode ser menor que 1')

    cardapio[index].nome = newNome
    cardapio[index].preco = newPreco
    cardapio[index].estoque = newEstoque

    menu()
}


function removerProduto() {

    const idEdit = Number(prompt('ID do produto que quer remover'))
    const index = cardapio.findIndex(produto => produto.id === idEdit)

    if (index < 0) return alert('ID não encontrado. Verifique os dados!')

    cardapio.splice(index,1)
    menu()
}

function receberPedido() {

    const produtoPedido = []
    let pedirMais = true

    while (pedirMais) {
      

        const produtoId = Number(prompt(`${listarProdutosCaixa()}\nDigite o ID do produto que deseja comprar`))
        const quantidade = Number(prompt(`${listarProdutosCaixa()}\nDigite a quantidade que quer comprar do produto`))
        const index = cardapio.findIndex(produto => produto.id === produtoId)


        if (index < 0) return alert('ID não encontrado. Verifique os dados!')
        if (quantidade > cardapio[index].estoque) {
            alert(`Estoque insuficiente! Possuímos apenas ${cardapio[index].estoque} unidades deste produto`)
            continue
        }

        if (relatorioPedidos.length) {
            nPedido = relatorioPedidos.length + 1
        } else {
            nPedido = 1
        }

        const produtos = {
            produtoId,
            quantidade,
            preco: quantidade * cardapio[index].preco
        }

        produtoPedido.push(produtos)
        cardapio[index].estoque -= quantidade

        pedirMais = confirm('Adicionar mais produto?')

    }

    const data = new Date()
    const precoTotal = produtoPedido.reduce((acc, current) => acc + current.preco, 0);

    const pedido = {
        nPedido,
        data,
        produtoPedido,
        precoTotal
    }

    relatorioPedidos.push(pedido)
    console.log(relatorioPedidos)
}


function somarEstoque() {
    
    const valorEstoque = cardapio.reduce((acc, produto) => acc += produto.estoque * produto.preco,0)
    const produtosEstoque = cardapio.length
    const unidadesEstoque = cardapio.reduce((acc, produto) => acc += produto.estoque,0)
    alert(`O estoque possui ${produtosEstoque} produtos cadastrados, que somados possuem ${unidadesEstoque} unidades e estão avaliados em R$ ${valorEstoque.toFixed(2)}`)
}


function relatorioDiario() {
    
    alert('ATENÇÃO: Utilize a data no padrão informado DD/MM/AAAA (EX:21/11/2023)')
    const dataInicial = prompt('Insira a data inicial do Relatorio (EX:21/11/2023')
    const dataFinal = prompt('Insira a data final do Relatorio (EX:23/11/2023')

    if (dataInicial.length !== 10 || dataFinal.length !== 10) return alert('DATA INVALIDA! Siga exatamente padrão o informado DD/MM/AAAA')

    const anoInicial = dataInicial.substring(dataInicial.length-4,dataInicial.length)
    const mesInicial = dataInicial.substring(3,5)
    const diaInicial = dataInicial.substring(0,2)
    
    const anoFinal = dataFinal.substring(dataFinal.length-4,dataFinal.length)
    const mesFinal = dataFinal.substring(3,5)
    const diaFinal = dataFinal.substring(0,2)


    const primeiraData = new Date(anoInicial,mesInicial-1,diaInicial,0,0,0).getTime()
    const segundaData = new Date(anoFinal,mesFinal-1,diaFinal,23,59,0).getTime()
    
    const pedidosFiltrados = relatorioPedidos.filter(pedido => pedido.data.getTime() >= primeiraData && pedido.data.getTime() <= segundaData)
    
    const faturamento = pedidosFiltrados.reduce((acc, pedido) => acc += pedido.precoTotal,0)
    alert(`No periodo entre ${diaInicial}/${mesInicial}/${anoInicial} e ${diaFinal}/${mesFinal}/${anoFinal}:\nForam realizados ${pedidosFiltrados.length} pedidos com um total de faturamento de R$ ${faturamento.toFixed(2)}\nLista de pedidos disponivel no console do navegador`)
    console.log(pedidosFiltrados)
}


function menu() {
    let opcao = prompt(`    
    Bem-vindo ao app da Padaria do Sr. João!
    Opções:
    1 - Listar produtos
    2 - Cadastrar novo produto
    3 - Editar produto
    4 - Remover produto
    5 - Receber pedidos
    6 - Somar valor do estoque
    7 - Relatório diário
    8 - Sair
    `)


    switch (opcao) {
        case "1":
            listarProduto()
            break;
        case "2":
            cadastrarProduto()
            break;
        case "3":
            editarProduto()
            break;
        case "4":
            removerProduto()
            break;
        case "5":
            receberPedido()
            break;
        case "6":
            somarEstoque()
            break;
        case "7":
            relatorioDiario()
            break;
        case "8":
            alert('App Finalizado')
            break;
        default:
            alert('Opção inválida! Tente novamente.')
            menu()
            break;
    }
}

menu()