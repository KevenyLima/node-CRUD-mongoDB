import { Router } from "express"
import { createMovie, deleteMovie, getAllMovies, getOneMovie, searching, updateMovie,testRoute } from "../controllers/MovieControllers"
import { validator } from "../middleware/handleValidations"
import { movieCreateValidations } from "../middleware/movieValidations"
const router = Router()
router.get('/test',testRoute)
router.post('/',movieCreateValidations(),validator,createMovie)
router.get('/',getAllMovies)
router.get('/:id',getOneMovie)
router.put('/:id',movieCreateValidations(),validator,updateMovie)
router.delete('/:id',deleteMovie)
router.get('/:search',searching)
export default  router 