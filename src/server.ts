require("dotenv").config()
import express from "express"
import routerMovies from "./routes/routesMovie"
import config from "config"
import db from '../config/db'
import Logger from "../config/logger"
const cors =require('cors')
const app = express()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
//routes
app.use('/movies',routerMovies)


const port = config.get<number>('port')
app.listen(port, async()=>{ 
    await db()
    Logger.info('rodando na porta'+port)
})