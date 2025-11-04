var um = document.getElementById('um');
var dois = document.getElementById('dois');
var tres = document.getElementById('tres');
var quatro = document.getElementById('quatro');
var cinco = document.getElementById('cinco');
var seis = document.getElementById('seis');
var sete = document.getElementById('sete');
var oito = document.getElementById('oito');
var nove = document.getElementById('nove');

var soma = document.getElementById('soma');
var subtrair = document.getElementById('subtrair');
var dividir = document.getElementById('dividir');
var multiplicar = document.getElementById('multiplicar');
var c = document.getElementById('C');

var resultado = document.getElementById('result');
var resultado_final = document.getElementById('final');

function mostrarResultado(x) {

    var numero = document.getElementById('result').innerHTML;

    if (x == '=') {
        if (String(numero).includes('x')){
            const mult = resultado.innerHTML.split(' x ');
            final.innerHTML = parseFloat(mult[0]) * parseFloat(mult[1])
        } else if (String(numero).includes('+')){
            const soma = resultado.innerHTML.split(' + ');
            final.innerHTML = parseFloat(soma[0]) + parseFloat(soma[1])
        } else if (String(numero).includes('-')){
            const sub = resultado.innerHTML.split(' - ');
            final.innerHTML = parseFloat(sub[0]) - parseFloat(sub[1])
        } else if (String(numero).includes('/')){
            const div = resultado.innerHTML.split(' / ');
            final.innerHTML = parseFloat(div[0]) / parseFloat(div[1])
        }
    }
    else {
        resultado.innerHTML = numero + x;
    }
}

function limparResultado() {
    c.addEventListener('click', () => {
        resultado.innerHTML = '';
        final.innerHTML = '';
    })
}