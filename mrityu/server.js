const express =require('express')
const cors = require('cors')
const bodyParser =require('body-parser')
var app = express()
var mongoose = require('mongoose')
var port =process.env.PORT || 3000

app.use(bodyParser.json)
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))

const mongoURI = 'mongodb://localhost:27017/meanloginreg'

mongoose
    .connect(mongoURI,{useNewUrlParser :true})
    .then(()=>console.log("MongoDB is Connected"))
    .catch(err => console.log(err))

    var Users =require('./routes/Users')
    app.use('/users',Users)

    app.listen(port,()=>{
        console.log("Server is running on Port Number : "+port)
    })