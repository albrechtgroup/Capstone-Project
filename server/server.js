const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/client`))


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

// module export from controller.js
const { getFortune } =  require('./controller.js');

let id = 4;

// POST
app.post('/api/items/:status',(req,res) => {
    const { name, description, contactInfo } = req.body
    const { status } = req.params;
    
    console.log(req.body)
    // 
    const newObj = {
       name, description, contactInfo, status, id
    }
    items.push(newObj)  
    // console.log(items)
    res.status(200).send(items)
});

// GET 
app.get('/api/items', (req, res) => {
  res.status(200).send(items)
})

// 
app.get('/api/fortune', getFortune);

app.listen(4000, () => console.log("===> Server Running on 4000 <==="));
