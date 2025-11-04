//*============= lista de questões do quiz ============//
const questoes = [
    {
        id: 1,
        questao: "O que é Software?", //pergunta
        respostas: [
            { text: "A) Peças como mouse e teclado", correct: false}, //resposta
            { text: "B) Parte lógica do computador", correct: true}, //resposta correta
            { text: "C) Parte física do computador", correct: false}, //resposta
            { text: "D) Nenhuma alternativa", correct: false}, //resposta
        ]
    },
    {
        id: 2,
        questao: "(Enem/2018) Uma empresa de comunicação tem a tarefa de elaborar um material publicitário de um estaleiro para divulgar um novo navio, equipado com um guindaste de 15 m de altura e uma esteira de 90 m de comprimento. No desenho desse navio, a representação do guindaste deve ter sua altura entre 0,5 cm e 1 cm, enquanto a esteira deve apresentar comprimento superior a 4 cm. Todo o desenho deverá ser feito em uma escala 1 : X. Os valores possíveis para X são, apenas,", //pergunta
        respostas: [
            { text: "A) X > 1 500", correct: false}, //resposta
            { text: "B) X < 3 000", correct: true}, //resposta
            { text: "C) 1 500 < X < 2 250", correct: false}, //resposta correta
            { text: "D) 1 500 < X < 3 000", correct: false}, //resposta
        ]
    },
    {
        id: 3,
        questao: "O que é Hardware?", //pergunta
        respostas: [
            { text: "A) Aplicativos, sites e programas", correct: false}, //resposta
            { text: "B) Parte lógica do computador", correct: false}, //resposta
            { text: "C) Parte física do computador", correct: true}, //resposta correta
            { text: "D) Nenhuma alternativa", correct: false}, //resposta
        ]
    },
];

//*============= plotando questões ============//
const previous = document.getElementById('previous');
const next = document.getElementById('next');
var questoesPag = 2;
var vMax = questoesPag;
var vMin = 1;
var score = 0;
document.getElementById('score').innerHTML = `${score}/${questoes.length}`;
var indexPag = 1;
let qtdQuestoes = questoes.length;

function rodarQuestao() {
    for (questao of questoes) {
        if ((questao.id <= vMax) && (vMin <= questao.id)) {
            const plotQuestao = `
            <div id='${questao.id}' class="box-questoes">
                <div class="main text">
                    <h1>Q.${questao.id}</h1>
                </div>
                <div class="quiz">
                    <h2 id="pergunta">${questao.questao}</h2>
                    <div class='questoes' id="buttons-resposta">
                        <button value='${questao.respostas[0]['correct']}' class="btn">${questao.respostas[0]['text']}</button>
                        <button value='${questao.respostas[1]['correct']}' class="btn">${questao.respostas[1]['text']}</button>
                        <button value='${questao.respostas[2]['correct']}' class="btn">${questao.respostas[2]['text']}</button>
                        <button value='${questao.respostas[3]['correct']}' class="btn">${questao.respostas[3]['text']}</button>
                    </div>
                </div>
            </div>
            `; 
            document.getElementById('list_questoes').innerHTML += plotQuestao;
        }
        if (qtdQuestoes > vMax) {
            next.style.display = 'flex';
        }
        if (vMin > questoesPag) {
            previous.style.display = 'flex';
        }
        if (vMax > qtdQuestoes) {
            next.style.display = 'none';
        }
        if (vMax == questoesPag) {
            previous.style.display = 'none';
        }
    }
    const  listQuestoes = document.querySelectorAll(".questoes");

    listQuestoes.forEach(questao => {
    const respostas = questao.querySelectorAll(".btn");
    respostas.forEach(resposta  => {
        resposta.addEventListener('click', respostaCorreta);
    });
});
}

rodarQuestao();

// setInterval(()=>{
//     document.getElementById('score').innerHTML = `${score}/${questoes.length}`;
// },10);

const numPag = document.getElementById('numPag');

next.addEventListener('click', ()=>{
    indexPag ++;
    vMin += questoesPag;
    vMax += questoesPag;
    document.getElementById('list_questoes').innerText = '';
    rodarQuestao();
    numPag.innerText = indexPag;
})
previous.addEventListener('click', ()=>{
    indexPag --;
    vMin -= questoesPag;
    vMax -= questoesPag;
    document.getElementById('list_questoes').innerText = '';
    rodarQuestao();
    numPag.innerText = indexPag;
})

//*============= análise das questões ============//

function respostaCorreta(e){
    const botaoSelecionado = e.target;
    let isCorrect = false;
    if (botaoSelecionado.value == "true"){
        isCorrect = true;
    }
    if(isCorrect){
        botaoSelecionado.classList.add("correct"); 
        score++;
        document.getElementById('score').innerHTML = `${score}/${questoes.length}`;
    }
    else{ 
        botaoSelecionado.classList.add("incorrect");
    }
}