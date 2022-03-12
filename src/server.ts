import express, { json } from "express"
import { Request,Response } from "express"
const cors =require('cors')
const app = express()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.post("/",(req,res)=>{
    const {name,cost}= req.body
    console.log()
    res.json({'name':name,'message':'backend mensagem'})
})
app.listen(3000)