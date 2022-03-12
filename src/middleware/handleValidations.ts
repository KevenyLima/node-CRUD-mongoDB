import {Request, Response, NextFunction} from "express"
import {validationResult} from "express-validator"

export const validator = (req:Request,res:Response,next:NextFunction)=>{
    const errors = validationResult(req)
    if(errors.isEmpty()){
        return next()
    }
    const extractErrors:Object[]=[]
    errors.array().map((error)=>{extractErrors.push({[error.param]:error.msg})})
    return res.status(422).json({errors:extractErrors})
}