import { Router } from 'express';
import { authRoutes } from '@modules/auth/infra/http/routes/auth.routes';
import { userRoutes } from '@modules/Users/Infra/Http/Routes/user.routes';
import { profileRoutes } from '@modules/Profile/infra/http/routes/profile.routes';

const routes = Router();

routes.use('/auth', authRoutes);
routes.use('/users', userRoutes);
routes.use('/profile', profileRoutes);

export { routes };
