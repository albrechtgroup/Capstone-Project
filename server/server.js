const express = require("express");
const cors = require("cors");
const axios = require('axios');

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')

// Form submision
// app.post(`/api/movies`, createMovie);
// app.put(`/api/movies/:id`, updateMovie);
// app.delete(`/api/movies/:id`, deleteMovie);

// .get from controller.js
app.get("/api/fortune", getFortune);



app.listen(4000, () => console.log("===> Server running on 4000 <==="));
