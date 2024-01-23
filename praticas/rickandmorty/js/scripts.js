let currentPage = 1


const charactersTotal = document.querySelector("#characters-total")
const locationsTotal= document.querySelector("#locations-total")
const episodesTotal = document.querySelector("#episodes-total")

const charactersURL = "https://rickandmortyapi.com/api/character/?page=1";
const episodesURL = "https://rickandmortyapi.com/api/episode";
const locationsURL = "https://rickandmortyapi.com/api/location";


async function apiInfos(page = 1) {
    const characters = await axios.get(`${charactersURL}`)
    const episodes = await axios.get(`${episodesURL}/?page=${page}`)
    const locations = await axios.get(`${locationsURL}/?page=${page}`)
  
    return {
      characters: characters.data,
      episodes: episodes.data,
      locations: locations.data
    }
}


function montarCard(image,name,statusEN,location,lastEpisode,especie,status) {

    return `
        <div class="card">
            <img class="card-img" src="${image}" />
            <div class="card-body">
                <div>
                    <h2 class="boldText">${name}</h2>
                    <p><span class="circulo"><i class="fa-solid fa-circle ${statusEN}"></i></span> ${especie} - ${status}</p>
                </div>
                <div>
                    <p>Última localização conhecida</p>
                    <p class="boldText">${location}</p>
                </div>
                <div>
                    <p>Visto a última vez em:</p>
                    <p class="boldText">${lastEpisode}</p>
                </div>
            </div>
        </div>
    `
}


async function getEpisode(episode) {
    try {
        const res = await axios.get(episode)
        return `${res.data.name} (${res.data.episode})`
    }
    catch {
        console.log('Error: ', error)
    }  
}

async function inserirCard(url) {

    const container = document.querySelector('#container')
    container.innerHTML = ""
    const response = await axios.get(url)
    const personagens = response.data.results

    for (const personagem of personagens) {
        const urlEpisode = personagem.episode[personagem.episode.length-1]
        const lastEpisode = await getEpisode(urlEpisode)
        
        container.innerHTML += montarCard(personagem.image,personagem.name,personagem.status,personagem.location.name,lastEpisode,traduzirStatus(personagem.status),traduzirEspecie(personagem.species))
    }
}

function fetchCharacters(page) {
    const searchTerm = document.querySelector("#searchTerm").value
    const newBaseUrl = `https://rickandmortyapi.com/api/character/?name=${searchTerm}&page=${page}`
  
    axios
      .get(newBaseUrl)
      .then((response) => {
        const personagens = response.data.results;
        inserirCard(newBaseUrl);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
}
  

function limpaContainer() {
    const container = document.querySelector('#container')
    container.innerHTML = ""
}

function searchCharacters() {
    currentPage = 1;
    limpaContainer()
    fetchCharacters(currentPage);
    updateCurrentPage();
}
  
function previousPage() {
    if (currentPage > 1) {
      currentPage--;
      fetchCharacters(currentPage);
      updateCurrentPage();
    }
}
  
function nextPage() {
    currentPage++;
    fetchCharacters(currentPage);
    updateCurrentPage();
}
  
function updateCurrentPage() {
    document.getElementById("currentPage").textContent = currentPage;
}
  
async function getTotalInfo(data) {
    const res = await apiInfos()
    return res[data].info.count
}
  
async function printTotalInfo() {
    charactersTotal.textContent = await getTotalInfo('characters')
    locationsTotal.textContent = await getTotalInfo('locations')
    episodesTotal.textContent = await getTotalInfo('episodes')
}


printTotalInfo()

  
function traduzirEspecie(species) {

    const translatedSpecies = {
        "Human": "Humano",
        "Alien": "Alienígena",
        "Humanoid": "Humanóide",
        "Unknown": "Desconhecido",
        "Poopybutthole": "Sr. Poopybutthole",
        "Mythological Creature": "Criatura Mítica",
        "Animal": "Animal",
        "Robot": "Robô",
        "Cronenberg": "Cronenberg",
        "Disease": "Doença",
    }

    return translatedSpecies[species] || "Não Definido";
}


function traduzirStatus(status) {
    
    const translatedStatus = {
        "Alive": "Vivo",
        "Dead": "Morto",
        "unknown": "Desconhecido"
    }
    
    return translatedStatus[status] || "Não Definido";
}

fetchCharacters(currentPage)
