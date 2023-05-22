const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

// found objects
let foundItems = [
    {
      name: "Leslie Jenkins",
      description: "Baseball Glove",
      contactInfo: "6465572390"

    },
    {
      name: "Mark Rugard",
      description: "Kids scooter",
      contactInfo: "3475544072"

    }     
   
];

app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/client`))

const { getFortune } = require('./controller')


// Endpoint for handling form submissions
app.post('/lost', (req, res) => {
  const { name, description, contact } = req.body;
  // Handle form submission



  res.sendStatus(200);
});

// Endpoint for handling PUT requests
app.get('/lost/', (req, res) => {
  const itemId = req.params.id;
  const { name, description, contact } = req.body;
  // 

});





// // Form submision
// app.post(`/api/users/2`, handleFormSubmission);
// app.get(`/api/users/2`, handleFormSubmission);






app.listen(4000, () => console.log("===> Server Running on 4000 <==="));
