import {body} from "express-validator"

export function movieCreateValidations(){
    return[
        body('title').isString().withMessage('o titulo é obrigatório').isLength({min:3}),
        body('description').isString().withMessage('a descrição é obrigatória').isLength({min:10}).withMessage('deve conter no minimo 3 caracteres'),
        body('stars').isArray().withMessage('os atores são obrigatorios'),
        body('rating').isNumeric().withMessage('avaliação é obrigatoria').custom((value:number)=>{
            if(value<0||value>10){
                throw new Error('a avaliação deve estar no intervalo de 0 a 10')
            }
            return true
        }),
        body('director').isString().withMessage('o nome do diretor é obrigatório').isLength({min:3}).withMessage('deve conter no minimo 3 caracteres'),
        body('poster').isURL().withMessage('o poster deve ser uma Url')
    ]
}
