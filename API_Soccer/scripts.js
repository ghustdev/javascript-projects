const escudoTime1 = document.getElementById('first-img');
const escudoTime2 = document.getElementById('last-img');
const golsTime1 = document.getElementById('first-h2');
const golsTime2 = document.getElementById('last-h2');


const baseUrl = 'https://api-football-v1.p.rapidapi.com/v3';
let insfosPartida = {};

//! buscar na API - com operação assincrona (esperar resposta da requisição - async)
async function buscarInfo(){
    const ano = document.getElementById('year').value;
    const params = {
        league: 13,
        season: ano,
        last: 1,
    };
    // parametros para buscar no url (querryString)
    // ex: '/fixtures?season=2023&league=13'
    const searchParams = new URLSearchParams(params)
    const endpoint = '/fixtures';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c5ab977b5emsh3a1f3ca1154797bp109ad7jsncdbfd1b5fff7',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        },
    };

    //! await serve para esperar  requisição ser concluida para dar a resposta
    const response = await fetch(baseUrl + endpoint + '?' + searchParams, options)

    const responseData = await response.json();

    insfosPartida = responseData.response[0];
    escudoTime1.src = 'img/8162788_25235.jpg';
    escudoTime2.src = 'img/8162788_25235.jpg';
    golsTime1.innerText = '?';
    golsTime2.innerText = '?';
}

function revelarTimes(){
    escudoTime1.src = insfosPartida.teams.home.logo;
    escudoTime2.src = insfosPartida.teams.away.logo;
}

function mostrarPlacar(){
    golsTime1.innerText = insfosPartida.goals.home;
    golsTime2.innerText = insfosPartida.goals.away;
}

document.getElementById('show-teams').addEventListener('click', revelarTimes);
document.getElementById('show-score').addEventListener('click', mostrarPlacar);
document.getElementById('show-all').addEventListener('click', function() {
    revelarTimes();
    mostrarPlacar();
});
//! como pegar os elementos selecionados em um select - change permite atualizar algo, nesse caso a função busarInfo
document.getElementById('year').addEventListener('change', buscarInfo);
