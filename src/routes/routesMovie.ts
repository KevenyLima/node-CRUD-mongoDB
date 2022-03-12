import { Request,Response,Router } from "express"
import { createMovie, deleteMovie, getAllMovies, getOneMovie, searching, updateMovie } from "../controllers/MovieControlers"
const router = Router()

router.post('/',createMovie)
router.get('/',getAllMovies)
router.get('/:id',getOneMovie)
router.put('/:id',updateMovie)
router.delete('/:id',deleteMovie)
router.get('/:search',searching)
export default  router 