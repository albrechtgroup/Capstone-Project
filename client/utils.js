let baseURL = 'http://localhost:4000';
const foundItem = document.getElementById('foundItems');

// Creat Item card display
const createCardItem  = (arr) => {
    // .map
    arr.map(item => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('card')
        console.log('CreateCardItem!')
        itemCard.innerHTML = `
          
        <div class="card-body">
            <h5 clas="card-title">${item.name} - ${item.id}</h5>
                <p class="card-text">${item.description}</p>
                <p class="card-text">${item.contactInfo}</p>
            <h5 class="card-title">${item.status}</h5>
            <a href="found.html" class="btn btn-primary">View Item</a>
        </div>
        <br> 

        `;
        
        console.log(itemCard)
        foundItem.appendChild(itemCard)
    });  
       
};

// Get all of the listed items
const getAllItems = () => {
    console.log("getAllItems invoked*")

    axios.get(`${baseURL}/api/items`)
    .then(res => {
        console.log(res.data)
        // call function passing res.data
        createCardItem(res.data);
    })
    .catch(err => {
        console.log(err)
    })

};
 
// Exported from controller.js
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
            console.log(data);
    });
};

// axios.get from a Dad Joke API*
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' }}
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return "Sorry, No jokes available."
    }
    
};

// Creating a new <li> and Append to the <ul> list: 
const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    console.log(jokeText)
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}
