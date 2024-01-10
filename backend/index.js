
const express = require('express')
const { ObjectId } = require('mongodb')
const app = express()
const port = 3000
const cors = require('cors')
app.use(cors())
const {connect_to_DB, get_DB} = require("./db")
// DB connection
let db;
connect_to_DB((err)=>{
    if (!err){
        app.listen(port, () => {
          console.log(`Example app listening on port ${port}...`)
        })
    }
    db = get_DB()
});


//Routes
app.get('/', (req, res) => {

    let notes = []

    // cursor
    db.collection('notes')
        .find()
        .forEach(book=>{
            notes.push(book)
        })
        .then(()=>{
            res.status(200).json(notes)
        })
        .catch(err=>{res.status(500).send("ERROR FETCHING!!! "+err)})
})

app.use(express.json())
app.post('/', (req,res)=>{
    // console.log(req.body)

    db.collection('notes').insertOne( req.body )
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({err: "Couldn't create a document"})
    })


})
app.delete('/:id', (req, res)=>{

    if(ObjectId.isValid(req.params.id)){
        
        db.collection('notes')
        .deleteOne({_id : new ObjectId(req.params.id)})
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err=>{res.status(500).send("ERROR DELETING!!! "+err)})
    } else {
        res.status(500).json({err: "NOt a valid document"})
    }
    
})
