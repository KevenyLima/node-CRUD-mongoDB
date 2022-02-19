const express = require("express")
const app = express()

app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.json({"successful":true})
})
app.listen(3000)