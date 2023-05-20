const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/client`))

const { getFortune } = require('./controller')

// // Endpoint for handling form submissions
// app.post('/submit', (req, res) => {
//   const { name, description, contact } = req.body;
//   // Handle form submission logic here

//   res.sendStatus(200);
// });

// // Endpoint for handling PUT requests
// app.put('/items/:id', (req, res) => {
//   const itemId = req.params.id;
//   const { name, description, contact } = req.body;
//   // Handle PUT request logic here
// });

// // Endpoint for handling DELETE requests
// app.delete('/items/:id', (req, res) => {
//   const itemId = req.params.id;
//   // Handle DELETE request logic here
// });



// // Form submision
// app.post(`/api/users/2`, handleFormSubmission);
// app.post(`/api/users/2`, handleFormSubmission);
// app.put(`/api/users/2`, handleFormSubmission);
// app.delete(`/api/users/2`, handleFormSubmission);

// .get from controller.js
app.get("/api/fortune", getFortune);



app.listen(4000, () => console.log("===> Server Running on 4000 <==="));
