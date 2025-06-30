import { Router } from 'express';
import { CreateUserController } from '../Controller/CreateUserController';
import { FindAllUserController } from '../Controller/FindAllUserController';
import { FindByIdUserController } from '../Controller/FindByIdUserController';
import { UpdateUserController } from '../Controller/UpdateUserController';
import { DeleteUserController } from '../Controller/DeleteUserController';
import { authenticate } from '@shared/infra/http/middleware/authenticate';
import permission from '@shared/infra/http/middleware/permissions';

const createUserController = new CreateUserController();
const findAllUserController = new FindAllUserController();
const findByIdUserController = new FindByIdUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

const userRoutes = Router();

userRoutes.get(
  '/find-all',
  authenticate,
  permission(['ADMIN']),
  findAllUserController.handle,
);
userRoutes.get(
  '/find-by-id/:id',
  authenticate,
  permission(['ADMIN']),
  findByIdUserController.handle,
);
userRoutes.post(
  '/create',
  authenticate,
  permission(['ADMIN']),
  createUserController.handle,
);

userRoutes.put(
  '/update/:id',
  authenticate,
  permission(['ADMIN']),
  updateUserController.handle,
);
userRoutes.delete(
  '/delete/:id',
  authenticate,
  permission(['ADMIN']),
  deleteUserController.handle,
);

export { userRoutes };
