import { Router } from 'express';
import { authRoutes } from '@modules/auth/infra/http/routes/auth.routes';
import { userRoutes } from '@modules/Users/Infra/Http/Routes/user.routes';


const routes = Router();

routes.use('/auth', authRoutes);
routes.use('/users', userRoutes);

export { routes }

