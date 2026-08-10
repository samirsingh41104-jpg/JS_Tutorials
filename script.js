let intervalChange;


const randomColor = function(){
    const hex = "0123456789ABCDEF"

    let color = '#';
    for(let i = 0 ; i < 6 ; i++){
        color += hex[(Math.floor(Math.random() * 16))]
    }

    return color;
}

const startChangingColor = function(){ 
    if (!intervalChange) {
        intervalChange = setInterval(changeBG, 1000);
    }
    
    function changeBG(){
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChangingColor = function(){
    clearInterval(intervalChange);
    intervalChange = null;
}

const start = document.querySelector('#start').addEventListener('click', startChangingColor)
const stop = document.querySelector('#stop').addEventListener('click', stopChangingColor)