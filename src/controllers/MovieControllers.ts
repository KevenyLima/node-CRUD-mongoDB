import { Request, Response } from "express";
import Logger from "../../config/logger";
import { MovieModel } from "../models/SchemaMovie";
export async function testRoute(req: Request, res: Response) {
    try {
        res.json({ message: 'mensagem enviada' })
    } catch (error:any) {
        Logger.error(`error:${error.message}`)
        res.status(400).json({ 'error': "não foi possivel concluir a ação"})
    }
}
export async function createMovie(req: Request, res: Response) {
    const { title, rating, description, director, stars, poster } = req.body
    const movie = {
        title: title,
        rating: rating,
        description: description,
        director: director,
        stars: stars,
        poster: poster
    }
    try {
        const newMovie = await MovieModel.create(movie)
        return res.status(200).json(newMovie)
    } catch (error:any) {
        Logger.error(`error:${error.message}`)
        return res.status(400).json({ "error": "não foi possivel concluir a ação" })
    }
}
export async function getAllMovies(req: Request, res: Response) {
    try {

        const movies = await MovieModel.find()
        return res.status(200).json(movies)

    } catch (error:any) {
        Logger.error(`error:${error.message}`)
        return res.status(400).json({ "error": "não foi possivel concluir a ação" })
    }
}
export async function getOneMovie(req: Request, res: Response) {
    const id = req.params.id
    try {

        const movie = await MovieModel.find({ _id: id })
        return res.status(200).json(movie)


    } catch (error:any) {
        Logger.error(`error:${error.message}`)
        return res.status(400).json({ "error": "não foi possivel concluir a ação"})
    }
}
export async function searching(req: Request, res: Response) {
    const search = req.params.search
    try {
        const movies = await MovieModel.find({ 'title': search })
        res.status(200).json(movies)
    } catch (error:any) {
        Logger.error(`error:${error.message}`)
        res.status(400).json({ 'error': "não foi possivel concluir a ação" })
    }

}
export async function updateMovie(req: Request, res: Response) {
    const id = req.params.id
    const { title, rating, description, director, stars, poster } = req.body
    const movieUpdated = {
        title: title,
        rating: rating,
        description: description,
        director: director,
        stars: stars,
        poster: poster
    }
    try {

        const movie = await MovieModel.updateOne({ _id: id }, movieUpdated)
        if(movie.matchedCount===0){
            res.status(422).json({message:'o filme nao foi encontrado'})
            return
        }
        return res.status(200).json(movieUpdated)


    } catch (error:any) {
        Logger.error(`error:${error.message}`)
        return res.status(400).json({ "error no sistema":"nao foi possivel concluir a ação" })
    }

}
export async function deleteMovie(req: Request, res: Response) {
    const id = req.params.id
    const movie = await MovieModel.findOne({_id:id})
    if(!movie){
        res.status(422).json({message:'filme não foi encontrado'})
        return
    }
    try {
        await MovieModel.deleteOne({ _id : id })
        return res.status(200).json({message:'filme deletado com sucesso'})
    } catch (error:any) {
        Logger.error(`erro no sistema:${error.message}`)
        return res.status(500).json({ "error": "não foi possivel concluir a ação"})
    }

}