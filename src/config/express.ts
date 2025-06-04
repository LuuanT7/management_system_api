import { routes } from '@shared/infra/http/routes';
import express from 'express';
import 'dotenv'
import '@shared/container'

export const CreateServer = () => {
  const app = express();
  // Middleware para parsear JSON - deve vir antes das rotas
  app.use(express.json());

  // Inicializar rotas
  app.use("/v1", routes);

  // Middleware para tratar rotas não encontradas (404)
  app.use((req, res) => {
    res.status(404).send('Not found');
  });

  return app;
}