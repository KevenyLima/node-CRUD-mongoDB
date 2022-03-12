import { Router } from "express"
import { createMovie, deleteMovie, getAllMovies, getOneMovie, searching, updateMovie,testRoute } from "../controllers/MovieControllers"
import { validator } from "../middleware/handleValidations"
import { movieCreateValidations } from "../middleware/movieValidations"
const router = Router()
router.get('/test',validator,testRoute)
router.post('/',movieCreateValidations(),validator,createMovie)
router.get('/',validator,getAllMovies)
router.get('/:id',validator,getOneMovie)
router.put('/:id',validator,updateMovie)
router.delete('/:id',validator,deleteMovie)
router.get('/:search',validator,searching)
export default  router 