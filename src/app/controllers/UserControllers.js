import User from "../models/user"
import {v4} from "uuid"



class UserController {
    async store (request, response){

         const {name, email, password_hash, admin} = request.body
        const user= await User.create({
      
        id: v4(),
        name,
        email,
        password_hash:"5e4r4f5r"
    
    });
    return response.status(201).json(user)

    }
}
export default  new UserController()



























/*
metodo store= cadastra/adicionar
metodo index= listar vários
metodo show= listar apenas um
metodo update= atualizar
metodo delete= deletar
*/