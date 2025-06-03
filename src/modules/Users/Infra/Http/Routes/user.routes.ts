import { Router } from "express";
import { CreateUserController } from "../Controller/CreateUserController";
import { FindAllUserController } from "../Controller/FindAllUserController";
import { FindByIdUserController } from "../Controller/FindByIdUserController";
import { UpdateUserController } from "../Controller/UpdateUserController";
import { DeleteUserController } from "../Controller/DeleteUserController";
import { authenticate } from "@shared/infra/http/middleware/authenticate";

const createUserController = new CreateUserController();
const findAllUserController = new FindAllUserController();
const findByIdUserController = new FindByIdUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

const userRoutes = Router();

userRoutes.get("/", findAllUserController.handle);
userRoutes.get("/:id", findByIdUserController.handle);
userRoutes.post("/", createUserController.handle);
userRoutes.put("/:id", updateUserController.handle);
userRoutes.delete("/:id", deleteUserController.handle);


export { userRoutes };


