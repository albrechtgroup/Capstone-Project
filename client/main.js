// Create *
const submitButton = document.querySelector(".btn btn-primary");
const loginBtn = document.getElementById("loginBtn");

const fortuneBtn = document.querySelector("#fortuneButton");
const dadJokeButton = document.querySelector('#dadJokeButton');
const jokes = document.querySelector('#jokes');




// 
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
            console.log(data);
    });
}

//
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' }}
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return "Sorry, No jokes available."
    }
    
}

// Creating a new <li> and Appending it to the <ul> list: 
const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    console.log(jokeText)
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}


// complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
dadJokeButton.addEventListener('click', addNewJoke);

