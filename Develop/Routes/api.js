const fs = require('fs');
const router = require('express').Router()
const {v4:uuidv4} = require('uuid');

router.get('/notes', (req,res) => {
   let data = JSON.parse(fs.readFileSync('./db/db.json','utf-8'))
   res.json(data)
});

router.post('/notes', (req,res) => {
    const myNote = req.body
    myNote.id = uuidv4()
    let data = JSON.parse(fs.readFileSync('./db/db.json','utf-8'))
    data.push(myNote)
    fs.writeFileSync('./db/db.json', JSON.stringify(data))
    res.json(data)
})
module.exports = router