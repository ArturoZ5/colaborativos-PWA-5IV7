const express = require('express');
const app = express();

app.get("/",(req,res)=>{
 res.sendFile(__dirname + "/views/index.html");
})

app.post("/files",(req, res)=>{

})

app.listen(8080,()=> console.log("Server started"));