const submitButton = document.querySelector(".btn.btn-primary");
// const loginBtn = document.getElementById("loginBtn");
const form = document.getElementById('lostFoundForm');
const fortuneBtn = document.querySelector("#fortuneButton");
const dadJokeButton = document.querySelector('#dadJokeButton');
const jokes = document.querySelector('#jokes');
const postForm = document.getElementById('postForm');
const commentsList = document.getElementById('comments');



// Handle form submission...
function handleFormSubmission(event) {
    event.preventDefault();
    // I also have this above ^
    // const form = document.getElementById('lostFoundForm');
    const formData = new FormData(form);
    const method = form.getAttribute('method');
    const url = form.getAttribute('action');

    const data = {};
    for (let [key, value] of formData) {
        data[key] = value;
    }

    // POST  newUserData*
    axios.post('https://reqres.in/api/users/2', newUserData)
        .then(response => {
        console.log('POST request succeeded:', response.data);
    // Clear the input fields
        form.reset();
    })
    .catch(error => {
        console.error('POST request failed:', error);
    });


    // Example using axios.get
    axios.get('https://reqres.in/api/users/2')
        .then(response => {
            console.log('GET request succeeded:', response.data);
            form.reset();
    })
        .catch(error => {
            console.error('GET request failed:', error);
    });

    // Example using axios.put
    const updatedUserData = {
        name: 'John Doe',
        job: 'Software Engineer'
    };

    // PUT
    axios.put('https://reqres.in/api/users/2', updatedUserData)
        .then(response => {
            console.log('PUT request succeeded:', response.data);
            form.reset();
    })
        .catch(error => {
            console.error('PUT request failed:', error);
    });
    // Update User info
    const newUserData = {
        name: 'Jonathan Doe-Ray',
        job: 'Software Architect'
    };

    // DELETE
    axios.delete('https://reqres.in/api/users/2')
        .then(response => {
            console.log('DELETE request succeeded:', response.data);
            form.reset();
    })
        .catch(error => {
            console.error('DELETE request failed:', error);
    });

};


// This is being exported from controller.js
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

// Creating a new <li> and Appending it to the <ul> list: 
const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    console.log(jokeText)
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}

// Post Comments:
postForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission and page reload

    // Retrieve the values from the input fields
    const usernameInput = postForm.elements.username;
    const commentsInput = postForm.elements.comments;
    const username = usernameInput.value;
    const comments = commentsInput.value;

    // Create a new <li> element
    const newComment = document.createElement('li');
    newComment.textContent = `${username}: ${comments}`;

    // Append the new <li> to the <ul>
    commentsList.appendChild(newComment);

    // Clear the input fields
    usernameInput.value = '';
    commentsInput.value = '';
});

form.addEventListener('submit', handleFormSubmission);
fortuneBtn.addEventListener('click', getFortune);
dadJokeButton.addEventListener('click', addNewJoke);

