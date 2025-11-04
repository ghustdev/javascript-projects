const buttons = document.querySelectorAll('.button');
const player = document.getElementById('player');
const scroreXDiv = document.getElementById('scoreX');
const scroreODiv = document.getElementById('scoreO');

var currentPlayer = 'X';
var scroreX = 0;
var scroreO = 0;

function resetGame() {
    for (let i in buttons) {
        buttons[i].innerText = '';
    }
}

function verifyResponse() {

    // rows
    if ((buttons[0].innerText == currentPlayer && buttons[1].innerText == currentPlayer && buttons[2].innerText == currentPlayer) || (buttons[3].innerText == currentPlayer && buttons[4].innerText == currentPlayer && buttons[5].innerText == currentPlayer) || (buttons[6].innerText == currentPlayer && buttons[7].innerText == currentPlayer && buttons[8].innerText == currentPlayer)) {
        alert(`Jogador ${currentPlayer} venceu!`);
        resetGame();
        if (currentPlayer == 'O') {
            scroreO++;
            scroreODiv.innerHTML = `Jogador O: ${scroreO}`;
            currentPlayer = 'O';
        } else if (currentPlayer == 'X') {
            scroreX++;
            scroreXDiv.innerHTML = `Jogador X: ${scroreX}`;
            currentPlayer = 'X';
        }
    } 
    // colluns
    else if ((buttons[0].innerText == currentPlayer && buttons[3].innerText == currentPlayer && buttons[6].innerText == currentPlayer) || (buttons[1].innerText == currentPlayer && buttons[4].innerText == currentPlayer && buttons[7].innerText == currentPlayer) || (buttons[2].innerText == currentPlayer && buttons[5].innerText == currentPlayer && buttons[8].innerText == currentPlayer)) {
        alert(`Jogador ${currentPlayer} venceu!`);
        resetGame();
        if (currentPlayer == 'O') {
            scroreO++;
            scroreODiv.innerHTML = `Jogador O: ${scroreO}`;
            currentPlayer = 'O';
        } else if (currentPlayer == 'X') {
            scroreX++;
            scroreXDiv.innerHTML = `Jogador X: ${scroreX}`;
            currentPlayer = 'X';
        }
    } 
    // diagonals
    else if ((buttons[0].innerText == currentPlayer && buttons[4].innerText == currentPlayer && buttons[8].innerText == currentPlayer) || (buttons[2].innerText == currentPlayer && buttons[4].innerText == currentPlayer && buttons[6].innerText == currentPlayer)) {
        alert(`Jogador ${currentPlayer} venceu!`);
        resetGame();
        if (currentPlayer == 'O') {
            scroreO++;
            scroreODiv.innerHTML = `Jogador O: ${scroreO}`;
            currentPlayer = 'O';
        } else if (currentPlayer == 'X') {
            scroreX++;
            scroreXDiv.innerHTML = `Jogador X: ${scroreX}`;
            currentPlayer = 'X';
        }
    } 
    // deu velha
    else {
        var velha = []
        for (let i in buttons) {
            if (buttons[i].innerText !== '') {
                velha.push(true);
            }
        }

        console.log(velha);

        if (length(velha) == 9) {
            alert(`Deu velha!!!`)
            resetGame()
        }
    }
}

function fillButton(button) {
    if (button.innerText === '') {
        button.innerText = currentPlayer;
        currentPlayer == 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
        verifyResponse();
        player.innerText = `Vez do Jogador: ${currentPlayer}`;
    } else if (button.innerText !== '') {
        alert('Espaço já preenchido')
    }
}
