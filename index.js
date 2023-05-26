const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const allChefData = require('./data/allData.json');
const specialtiesData = require('./data/specialtiesData.json');
app.use(cors());
app.get('/', (req, res)=>{
    res.send('no data in default route.');
})
app.get('/allData', (req, res) => {
    res.send(allChefData);
})
app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    const recipe = allChefData?.find(chef => chef.id == id);
    res.send(recipe);
})
app.get('/specialtiesData', (req, res)=>{
    res.send(specialtiesData);
})
app.listen(port, () =>{
    console.log('server listening on port 5000');
})
