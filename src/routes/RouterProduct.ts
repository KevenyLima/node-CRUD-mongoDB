import { Request,Response,Router } from "express"
const router = Router()
router.get('/',(req:Request,res:Response)=>{
    res.status(200).json({message:'mensagem teste'}).send('esta funcionando')
})
export default  router 