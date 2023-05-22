let baseURL = 'http://localhost:4000';


// Exported from controller.js
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
            console.log(data);
    });
}

// axios.get from a Dad Joke API*
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' }}
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return "Sorry, No jokes available."
    }
    
}

// Creating a new <li> and Append to the <ul> list: 
const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    console.log(jokeText)
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}
