const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Tadeo Santana")});

app.get('/tadeo', (req,res) => {res.send("Hello Tadeo")});

app.listen(port, ()=>console.log("Listening"));