import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthenticateUserUseCase } from '../../../useCases/AuthenticateUserUseCase';

export class AuthController {
  public async authenticate(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    /* 
         #swagger.tags = ['Auth']
         #swagger.summary = 'User Auth'
         #swagger.description = 'This route is for user autentication'
         #swagger.requestBody = {
           required: true,
           "content": {
             "application/json": {
               schema: {
                 type: "object",
                 properties: {
                   email: {
                       type: "string"
                   },
                   password: {
                       type: "string"
                   },
                 },
                 required: ["email", "password"]
               }
             }
           } 
         }
         #swagger.security = []
       */
    try {

      const authenticateUser = container.resolve(AuthenticateUserUseCase);

      const { user, token, refreshToken } = await authenticateUser.execute({
        email,
        password,
      });

      return response.json({ user, token, refreshToken });
    } catch (error) {
      console.error(error)
      return response.status(500).json({ message: 'Internal server error' });
    }

  }
} 