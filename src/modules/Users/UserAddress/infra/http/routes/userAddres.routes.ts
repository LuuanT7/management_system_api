import { Router } from 'express';
import { CreateUserAddressController } from '../http/CreateUserAddressController';
import { UpdateUserAddressController } from '../http/UpdateUserAddressController';
import { DeleteUserAddressController } from '../http/DeleteUserAddressController';
import { authenticate } from '@shared/infra/http/middleware/authenticate';
import permission from '@shared/infra/http/middleware/permissions';

const createUserAddressController = new CreateUserAddressController();
const updateUserAddressController = new UpdateUserAddressController();
const deleteUserAddressController = new DeleteUserAddressController();

const userAddressRoutes = Router();

userAddressRoutes.post(
  '/create',
  authenticate,
  permission(['ADMIN']),
  createUserAddressController.handle,
);
userAddressRoutes.put(
  '/update/:id',
  authenticate,
  permission(['ADMIN', 'GUARDIAN', 'TEACHER']),
  updateUserAddressController.handle,
);
userAddressRoutes.delete(
  '/delete/:id',
  authenticate,
  permission(['ADMIN']),
  deleteUserAddressController.handle,
);

export { userAddressRoutes };
