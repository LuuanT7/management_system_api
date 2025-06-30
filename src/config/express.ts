import { routes } from '@shared/infra/http/routes';
import express from 'express';
import 'dotenv'
import '@shared/container'
import '@shared/container/providers'

import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '@shared/documents/swagger.json';

export const CreateServer = () => {
  const app = express();
  // Middleware para parsear JSON - deve vir antes das rotas
  app.use(express.json());

  // Inicializar rotas
  app.use("/v1", routes);

  //Inicializar rota do swagger
  app.use('/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))


  // Middleware para tratar rotas não encontradas (404)
  app.use((req, res) => {
    res.status(404).send('Not found');
  });

  return app;
}