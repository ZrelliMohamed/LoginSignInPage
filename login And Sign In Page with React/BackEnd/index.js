const express = require('express')
const cors = require('cors')
const db =require('./databases/index.js')
const { getAll,addOne,getOne } = require('./models/users.js')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/api/user/:email/:password',(req,res)=>{
    console.log(req.body);
    getOne((err,result)=>{
        if(err) res.status(400).json(err)
        else res.status(200).send(result);
    },[req.params.email,req.params.password])
})

app.post('/api/user/addOne',(req,res)=>{
    addOne((err,result)=>{
        if(err) res.send(err)
        else res.send(result)
    },req.body)
})



app.listen(8000)
