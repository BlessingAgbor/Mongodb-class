const express= require('express')
const mongoose = require('mongoose')

const port = 2022
const app = express()
const myRoute= require("./Router/router")

const url ='mongodb://localhost/set05'
mongoose.connect(url).then(()=> {
    console.log("connect successfully");
}).catch((err)=> {
    console.log("something went wrong" + err.message);
})

app.use(express.json())
app.use("/api", myRoute)

app.listen(port, ()=>{
    console.log(`I'm running in this port ${port}`);
})