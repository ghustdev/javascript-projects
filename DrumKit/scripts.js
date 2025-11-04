window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    if(!audio) return; // não retorna nada, para a função
    audio.currentTime = 0 // diminu
    audio.play();
    key.classList.add('playing');
});

function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    // this pega a div inteira
    this.classList.remove('playing');
}



const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// mobile / click button
keys.forEach(key => key.addEventListener('click', function(e){
    const audio = document.querySelector(`audio[id='${e.target.id}']`);
    if (!e.target.id) {
        if(!audio) return;
        return;
    }
    audio.play();
    audio.currentTime = 0;
    key.classList.add('playing');
}));
