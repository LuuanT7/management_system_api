import 'reflect-metadata';
import 'express-async-errors';
import "./bootstrap/app";
import chalk from 'chalk';
import { CreateServer } from '@config/express';

const app = CreateServer();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(chalk.green(`Servidor rodando em: http://localhost:${port}`));
});
