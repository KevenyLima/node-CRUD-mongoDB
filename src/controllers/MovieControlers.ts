import { Request,Response } from "express";
import { MovieModel } from "../models/SchemaMovie";

export async function createMovie(req:Request,res:Response) {
    const {title,rating,description,director,start,poster} = req.body
    const movie = {
        title:title,
        rating:rating,
        description:description,
        director:director,
        start:start,
        poster:poster
    }
    try {
        async()=>{
            const newMovie = MovieModel.create(movie)
            return res.status(200).json(newMovie)
        }
        
    } catch (error) {
        return res.status(400).json({"error":error})
    }
}
export async function getAllMovies(req:Request,res:Response){
    try {
        async()=>{
            const movies = await MovieModel.find()
            return res.status(200).json(movies)
        }
    } catch (error) {
        return res.status(400).json({"error":error})
    }
}
export async function getOneMovie(req:Request,res:Response){
    const id = req.params.id
    try {
        async()=>{
            const movie = await MovieModel.find({'id':id})
            return res.status(200).json(movie)
        }
       
    } catch (error) {
        return res.status(400).json({"error":error})
    }
}
export async function searching(req:Request,res:Response) {
    const search = req.params.search
    try {
        MovieModel.find({'title':search})
    } catch (error) {
        
    }
    
}
export async function updateMovie(req:Request,res:Response){
    const id = req.params.id
    const {title,rating,description,director,start,poster} = req.body
    const movieUpdate = {
        title:title,
        rating:rating,
        description:description,
        director:director,
        start:start,
        poster:poster
    }
    try {
        async()=>{
            const movie = MovieModel.updateOne({'id':id},movieUpdate)
            return res.status(200).json(movie)
        }
        
    } catch (error) {
        return res.status(400).json({"error":error})
    }

}
export async function deleteMovie(req:Request,res:Response){
    const id = req.params.id
    try {
        async()=>{
            MovieModel.deleteOne({'id':id})
            return res.status(200)
        }
        
    } catch (error) {
        return res.status(400).json({"error":error})
    }
    
}