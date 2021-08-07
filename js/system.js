const body = document.querySelector('body');
const img = document.querySelector('img');

body.style.backgroundImage = `url(./img/${Math.floor(Math.random()*4)}.jpg)`;
// img.src = `./img/${Math.floor(Math.random()*4)}.jpg`;
// console.log();
// body.style.backgroundImage = `../img/${Math.floor(Math.random()*4)}.jpg`