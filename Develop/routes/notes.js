const notes = require('express').Router();

notes.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

   if(req.body){

   }
   res.json()
})