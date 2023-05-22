console.log("found.js");

const fortuneBtn = document.querySelector("#fortuneButton");
const dadJokeButton = document.querySelector('#dadJokeButton');
const jokes = document.querySelector('#jokes');







fortuneBtn.addEventListener('click', getFortune);
dadJokeButton.addEventListener('click', addNewJoke);
