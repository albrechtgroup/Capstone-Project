const fortuneBtn = document.querySelector("#fortuneButton");
const dadJokeButton = document.querySelector('#dadJokeButton');
const jokes = document.querySelector('#jokes');


getAllItems();



// cardItem.addEventListener('submit', createCardItem);
fortuneBtn.addEventListener('click', getFortune);
dadJokeButton.addEventListener('click', addNewJoke);

