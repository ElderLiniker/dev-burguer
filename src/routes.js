import {Router} from "express"
import multer from "multer"
import multerconfig from "./config/multer"

import UserControllers from "./app/controllers/UserControllers"
import SessionController from "./app/controllers/SessionController"
import productController from "./app/controllers/productController"




const routes = new Router()

const upload = multer(multerconfig)

routes.post("/users", UserControllers.store)
routes.post("/session", SessionController.store)
routes.post("/products", upload.single("file"), productController.store)
export default routes;