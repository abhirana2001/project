const express = require("express")
const app = express()




app.get("/",()=>{
    console.log("hi");
})




app.listen(8080,()=>{
    console.log("start");
})