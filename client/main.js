const form = document.getElementById('lostFoundForm');
const submitButton = document.querySelector(".btn.btn-primary");
const postForm = document.getElementById('postForm');
const commentsList = document.getElementById('comments');
const itemStatus = document.querySelector('input[name="flexRadioDefault"]:checked').value;
const cardItem = document.querySelector('card-body');


// Handle the form POST
const handleForm = (event) => {
    event.preventDefault(); 
    // Retrieve the values from the input fields
    const nameInput = form.elements.name;
    const descriptionInput = form.elements.description;
    const contactInput = form.elements.contact;
    
    // Create an object with the form data
    const formData = {
        name: nameInput.value,
        description: descriptionInput.value,
        contactInfo: contactInput.value
    };

    // POST
    axios.post(`${baseURL}/api/items/${itemStatus}`, formData)
        .then(res => {
            console.log(res.data)
                       
        })
        .catch(err => {
            alert(err.message)
        })
    
    // Clear the input fields
    nameInput.value = '';
    descriptionInput.value = '';
    contactInput.value = '';

};


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

form.addEventListener('submit', handleForm);


