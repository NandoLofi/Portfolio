//Dependencies
const express = require('express');
const cors = require('cors');

//JSON Files
const projects = require('./projects.json');
const about = require('./about.json')

//app oject
const app = express();

//middleware
app.use(cors());

//home route
app.get('/', (req, res)=>{
    res.send("Hello, welcome!");
});

//route for retreiving projects
app.get('/projects', (req, res)=>{
    res.json(projects);
});

//route for aboutme
app.get('/about',(req, res)=>{
    res.json(about);
});

//variable for PORT number
const PORT = process.env.PORT || 4000;

//listener for the server
app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`));