const axios = require('axios').default
const url = 'https://api.le-systeme-solaire.net/rest/bodies/'


function fetchSolarSystem() {

    axios.get(url)
    .then((res) => {
        
        // 1 - Consumindo API e armazenando dados
        const data = res.data.bodies

        // 2 - Filtrando os planetas
        const planetas = filtrarPlanetas(data)
        // console.log(planetas)


        // 3 - Encontrando o planeta terra
        // console.log(earth(planetas))


        // 4 - Verificando palentas que possuem luas e armazenando
        // console.log(hasMoon(planetas))


        // 5 - Transformando dados e armazenando em array
        const nomePlanetas = transformarPlaneta(planetas)
        // console.log(nomePlanetas)


        // 6 - Classificando por tamanho
        const arrayOrdenado = ordenaPorTamanho(planetas)
        
        // console.log(arrayOrdenado.map(planeta => planeta.englishName).join(', '))


        // 7 - Concatenando informações
        const stringPlaneta = nomePlanetas.join(', ')
        // console.log(stringPlaneta)


        // 8 - Listando os 5 menores planetas e somando a massa total deles
        // console.log(somaMassas(arrayOrdenado))


        // 9 - Filtra planetas que possuem mais de 2 luas e lista os que possuem densidade maior que 1
        // console.log(filtrarLuas(planetas))


        // 10 - Ordene por descobrimento
        // console.log(ordenaPorDescobrimento(data))

        // 11 - 
        // console.log(filterByName(data,'Earth'))

        // console.log(hasDescobrimento)

        // 12 - 
        // console.log(filterByTemperature(planetas))


        // 13 - 
        // console.log(filterByBodyType(data))

        // 14 - 
        // console.log(ordenarComplexo(data))


        // 15 -
        // console.log(orbitados(data))


        // 16 -
        // console.log(mediaMassa(planetas))


        // 17 - 
        // console.log(distanciaEntre(data, 'Saturn', 'Pluto')) 


        // 18 - 
        // console.log(listaLuas(planetas))

        
        // 19 - 
        // console.log(analiseEstatistica(planetas))
                         
    }).catch((error) => {
        console.log(`Status Code: ${error.status}`)
    })
}

fetchSolarSystem()


function convertStringToDate(dateString) {
    const [day, month, year] = dateString.split('/')
    return new Date(`${year}-${month}-${day}`)
  }

function formatDateString(date) {
    const day = date.getDate()
    const month = date.getMonth() + 1 // Mês é zero-indexed
    const year = date.getFullYear()

    // Adiciona zero à esquerda para dias e meses com um único dígito
    const formattedDay = day < 10 ? `0${day}` : day
    const formattedMonth = month < 10 ? `0${month}` : month

    return `${formattedDay}/${formattedMonth}/${year}`
}

// 2 - Filtrando os planetas
function filtrarPlanetas(data) {
    return data.filter(planeta => planeta.isPlanet)
}

// 3 - Encontrando o planeta terra
function earth(planetas) {
   return planetas.find(planeta => planeta.englishName === 'Earth')
}

// 4 - Verificando palentas que possuem luas e armazenando
function hasMoon(planetas) {
    return planetas.filter(planeta => planeta.moons !== null)
}

// 5 - Transformando dados e armazenando em array
function transformarPlaneta(planetas) {
    return planetas.map(planeta => planeta.englishName)
}

// 6 - Classificando por tamanho
function ordenaPorTamanho(planetas) {
    return planetas.sort((a,b) => a.meanRadius - b.meanRadius)
}

// 7 =
function somaMassas(planetas) {
   return planetas.slice(0,5).reduce((acc,planeta) => acc += planeta.mass.massValue,0)
}

// 8 -
function filtrarLuas(planetas) {
    const byMoon = planetas.filter(planeta => planeta.moons !== null && planeta.moons.length > 2 && planeta.density > 1)
    return byMoon.map(planeta => planeta.englishName).join(', ')
}

// 10 - 
function ordenaPorDescobrimento(data) {
    const hasDescobrimento = data.filter(astro => astro.discoveryDate !== '')

    hasDescobrimento.forEach(astro => {
        astro.discoveryDate = convertStringToDate(astro.discoveryDate)
    })  
    
    hasDescobrimento.sort((a,b) => b.discoveryDate - a.discoveryDate)

    return hasDescobrimento.map(astro => {
        const formattedDate = formatDateString(astro.discoveryDate)
        return `${astro.englishName} ${formattedDate}`
    })
}


function filterByName(data,name) {
    const astro = data.filter(astro => astro.englishName === name)

    return {
        nome: astro[0].englishName,
        distancia: astro[0].perihelion, 
        massa: astro[0].mass.massValue, 
        gravidade: astro[0].gravity, 
        densidade: astro[0].density
    }
}


function filterByTemperature(planetas) {
    const astro = planetas.filter(planeta => planeta.avgTemp-272 >= 8 && planeta.avgTemp-272 <= 32 )
    return astro
}


function filterByBodyType(data) {

    const todosAstros = data.map(astro => astro)

    const astros = todosAstros.reduce((acc,astro) => {
        const bodyType = astro.bodyType


        if (!acc[bodyType]) {
            acc[bodyType] = []
        }

        let cosmo = {
            nome: astro.englishName,
            tamanho: astro.meanRadius
        }

        acc[bodyType].push(cosmo)

        acc[bodyType].sort((a,b) => b.tamanho - a.tamanho)

        return acc
    }, {})

    return astros
}


 function ordenarComplexo(data) {
    const todosAstros = data.map(astro => astro)

    const astros = todosAstros.reduce((acc,astro) => {
        const bodyType = astro.bodyType


        if (!acc[bodyType]) {
            acc[bodyType] = []
        }

        let corpo = {
            nome: astro.englishName,
            tamanho: astro.meanRadius
        }

        acc[bodyType].push(corpo)

        acc[bodyType].sort((a,b) => b.tamanho - a.tamanho)
        acc[bodyType] = acc[bodyType].slice(0, 3)

        return acc
    }, {})

    return astros
 }


 function orbitados(data) {
    const astrosOrbitam = data.filter(astro => astro.aroundPlanet !== null)

    const planetasOrbitados = astrosOrbitam.reduce((acc,astro) => {
        const planeta = astro.aroundPlanet.planet

        if (!acc[planeta]) {
            acc[planeta] = []
        }

        let corpos = {
            nome: astro.englishName,
            tipo: astro.bodyType
        }

        acc[planeta].push(corpos)

        return acc

    }, {})

    return planetasOrbitados
 }


 function mediaMassa(planetas) {

    const massaTotal = planetas.reduce((acc,planeta) => acc += planeta.mass.massValue * Math.pow(10, planeta.mass.massExponent), 0)
    const mediaMassa = massaTotal / planetas.length

    return mediaMassa
 }


 function distanciaEntre(data,primeiroPlaneta,segundoPlaneta) {

    const planeta1 = data.filter(planeta => planeta.englishName === primeiroPlaneta)
    const planeta2 = data.filter(planeta => planeta.englishName === segundoPlaneta)

    const distanciaMed = Math.abs((planeta2[0].perihelion + planeta2[0].aphelion)/2) - ((planeta1[0].perihelion + planeta1[0].aphelion) / 2)
    const distanciaMin = Math.abs(planeta2[0].perihelion - planeta1[0].aphelion)
    
    const distancias = {
        media: distanciaMed,
        minima: distanciaMin
    }

    return distancias
 }


 function listaLuas(planetas) {
    const planetasLuas = planetas.filter(planeta => planeta.moons !== null)

    const luasByPlaneta = planetasLuas.reduce((acc, planeta) => {
        const planetaName = planeta.englishName

        if (!acc[planetaName]) {
            acc[planetaName] = 0
        }

        acc[planetaName] += planeta.moons.length

        return acc

    }, {})

    return luasByPlaneta
 }

 function analiseEstatistica(planetas) {
    const massas = planetas.map(planeta => planeta.mass.massValue * Math.pow(10,planeta.mass.massExponent))
    let index = 0
    let mediana = 0

    massas.sort((a,b) => a-b)
    if (massas.length % 2 !== 0) {
        index = Math.floor(massas.length / 2)-1
        mediana = massas[index]
    } else {
        index = Math.floor(massas.length / 2)
        mediana = (massas[index-1] + massas[index]) / 2
    }

    const planetaPorMassa = planetas.map(planeta => ({
        nome: planeta.englishName,
        massa: planeta.mass.massValue * Math.pow(10, planeta.mass.massExponent)
    }))

    planetaPorMassa.push({nome: 'Mediana', massa: mediana})
    planetaPorMassa.sort((a,b) => a.massa - b.massa)
    const indexMediana = planetaPorMassa.findIndex(planeta => planeta.nome === "Mediana")
    const planetaMenor = planetaPorMassa[indexMediana-1]
    const planetaMaior = planetaPorMassa[indexMediana+1]
    
    if (Math.abs(mediana - planetaMenor) < Math.abs(mediana - planetaMaior)) {
        return `O planeta que mais se aproxima da mediana das massas (${mediana}) é ${planetaMenor.nome} com a massa de ${planetaMenor.massa}`
    } else {
        return `O planeta que mais se aproxima da mediana das massas (${mediana}) é ${planetaMaior.nome} com a massa de ${planetaMaior.massa}`
    }

 }