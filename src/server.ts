require("dotenv").config()
import express from "express"
import router from "./routes/RouterProduct"
import config from "config"
import db from '../config/db'
const cors =require('cors')
const app = express()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
//routes
app.use('/product',router)


const port = config.get<number>('port')
app.listen(port, async()=>{ 
    await db()
})