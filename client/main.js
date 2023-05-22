const form = document.getElementById('lostFoundForm');
const submitButton = document.querySelector(".btn.btn-primary");
const postForm = document.getElementById('postForm');
const commentsList = document.getElementById('comments');


// Handle the form POST
const handleFormSubmission = () => {
    // axios POST



};

const getLostItems = () => {
    // axios GET 


    
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

form.addEventListener('submit', handleFormSubmission);

