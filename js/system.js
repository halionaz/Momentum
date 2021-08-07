const body = document.querySelector('body');
const date = document.querySelector('#jsDate');
const clock = document.querySelector('#jsClock');

body.style.backgroundImage = `url(./img/${Math.floor(Math.random()*4)}.jpg)`;

function clockDisplay(){
    const now = new Date();
    date.innerHTML = `${now.getFullYear()}.${String(now.getMonth()+1).padStart(2,'0')}.${String(now.getDate()).padStart(2,'0')}`;
    clock.innerHTML = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`
}

clockDisplay();
setInterval(clockDisplay,1000);