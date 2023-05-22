const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/client`))

const { getFortune } = require('./controller')


// found objects
let items = [
    {
      name: "Leslie Jenkins",
      description: "Baseball Glove",
      contactInfo: "6465572390",
      status: "found",
      id: 1

    },
    {
      name: "Mark Rugard",
      description: "Kids scooter",
      contactInfo: "3475544072",
      status: "lost",
      id: 2
    },
    {
      name: "Elizabeth Berkley",
      description: "Beaded Necklace",
      contactInfo: "2129674537",
      status: "found",
      id: 3
    }        
];


let id = 4;

// POST
app.post('/api/items/:status',(req,res) => {
    const { name, description, contactInfo } = req.body
    const { status } = req.params;
    // 
    const newObj = {
       name, description, contactInfo, status, id
    }
    items.push(newObj)  
    res.status(200).send(items)
});




// // Send the form data using axios POST request
// axios.post('/api/foundItems', formData)
//     .then(response => {
//         // Handle the response if needed
//         console.log(response.data);
//         // Redirect to the found.html page
//         window.location.href = 'found.html';
//     })
//     .catch(error => {
//         // Handle the error if needed
//         console.error(error);
//     });
 
// // GET
// axios.get('/api/foundItems', formData)
//     .then(response => {
//         // Handle the response if needed
//         console.log(response.data);
//         // Redirect to the found.html page
//         window.location.href = 'found.html';
//     })
//     .catch(error => {
//         // Handle the error if needed
//         console.error(error);
//     });
 


// // Form submision
// app.post(`/api/foundItems`, handleFormSubmission);
// app.get(`/api/foundItems`, handleFormSubmission);


app.listen(4000, () => console.log("===> Server Running on 4000 <==="));
