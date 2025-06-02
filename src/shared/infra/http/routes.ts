import { Router } from 'express';
import { authRoutes } from '@modules/auth/infra/routes/auth.routes';
import { userRoutes } from '@modules/users/infra/http/routes/user.routes';


const routes = Router();

routes.use('/auth', authRoutes);
routes.use('/users', userRoutes);

export {routes}

