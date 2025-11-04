const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');

const clock = document.querySelector('.clock');


function changeColor(i) {
    if (i==0) {
        red.style.background = '#ff2020';
        red.style.boxShadow = '0 0 30px #ff2020';
        clock.style.boxShadow = '0 0 40px #ff2020';
        clock.style.border = '4px solid #ff2020';
        clock.style.color = '#ff2020';

        yellow.style.background = '#000';
        yellow.style.boxShadow = '0 0 10px #000';
        green.style.background = '#000';
        green.style.boxShadow = '0 0 10px #000';
    }
    else if (i==2) {
        yellow.style.background = '#e4e400';
        yellow.style.boxShadow = '0 0 30px #e4e400';
        clock.style.boxShadow = '0 0 40px #e4e400';
        clock.style.border = '4px solid #e4e400';
        clock.style.color = '#e4e400';

        red.style.background = '#000';
        red.style.boxShadow = '0 0 10px #000';
        green.style.background = '#000';
        green.style.boxShadow = '0 0 10px #000';
    }
    else if (i==1) {
        green.style.background = '#0dc300';
        green.style.boxShadow = '0 0 30px #0dc300';
        clock.style.boxShadow = '0 0 40px #0dc300';
        clock.style.border = '4px solid #0dc300';
        clock.style.color = '#0dc300';

        yellow.style.background = '#000';
        yellow.style.boxShadow = '0 0 10px #000';
        red.style.background = '#000';
        red.style.boxShadow = '0 0 10px #000';
    }
}


var time = 11;
var i = 0;

function countTime(){
    time=time-1;
    clock.innerHTML = `00:${time}`;

    changeColor(i)

    if (i==0) {
        if (time==0) {
            time=6;
            i=1;
            changeColor(i);
        }
    }
    else if (i==1) {
        if (time==0) {
            time=3;
            i=2;
            changeColor(i);
        }
    }
    else if (i==2) {
        if (time==0) {
            time=11;
            i=0;
            changeColor(i);
        }
    }
    

}

var interval = setInterval(countTime,1000)