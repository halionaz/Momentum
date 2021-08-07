const body = document.querySelector('body');
const date = document.querySelector('#jsDate');
const clock = document.querySelector('#jsClock');
const usernameContainer = document.querySelector('#jsUsername');

body.style.backgroundImage = `url(./img/${Math.floor(Math.random()*4)}.jpg)`;

function clockDisplay(){
    const now = new Date();
    date.innerHTML = `${now.getFullYear()}.${String(now.getMonth()+1).padStart(2,'0')}.${String(now.getDate()).padStart(2,'0')}`;
    clock.innerHTML = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`
}

function nameDisplay(name){
    usernameContainer.innerHTML = `${name}님 환영합니다!`;
}

function nameInput(){
    const input = document.createElement('input');
    const form = document.createElement('form');
    input.type = 'text';
    input.placeholder = '이름을 입력하세요 / Input your name';
    input.id = 'jsNameInput';
    form.appendChild(input);
    form.addEventListener('submit',event => {
        event.preventDefault();
        const inpName = event.target.querySelector('input').value;
        localStorage.setItem('username',inpName);
        nameDisplay(inpName);
    })
    usernameContainer.appendChild(form);
}

function getName(){
    const name = localStorage.getItem('username');
    if(name == null){
        nameInput();
    } else {
        nameDisplay(name);
    }
}

clockDisplay();
setInterval(clockDisplay,1000);
getName();