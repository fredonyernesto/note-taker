const notes = require('express').Router();
const {
    readFromFile,
    readAndAppend,
    writeToFile,
  } = require('../helpers/fsUtils');

notes.get('/notes', (req, res) =>{
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if(req.body){
        readAndAppend(req.body, './db/db.json')
        res.json(`Note added successfully`);
    } else {
        res.errored('Error in adding note')
    }
});

module.exports = notes;