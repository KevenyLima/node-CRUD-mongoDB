import { Router } from "express"
import { createMovie, deleteMovie, getAllMovies, getOneMovie, searching, updateMovie,testRoute } from "../controllers/MovieControllers"
const router = Router()
router.get('/test',testRoute)
router.post('/',createMovie)
router.get('/',getAllMovies)
router.get('/:id',getOneMovie)
router.put('/:id',updateMovie)
router.delete('/:id',deleteMovie)
router.get('/:search',searching)
export default  router 