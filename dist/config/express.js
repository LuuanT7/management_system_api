"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateServer = void 0;
const routes_1 = require("@shared/infra/http/routes");
const express_1 = __importDefault(require("express"));
require("dotenv");
require("@shared/container");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("@shared/documents/swagger.json"));
const CreateServer = () => {
    const app = (0, express_1.default)();
    // Middleware para parsear JSON - deve vir antes das rotas
    app.use(express_1.default.json());
    // Inicializar rotas
    app.use("/v1", routes_1.routes);
    //Inicializar rota do swagger
    app.use('/v1/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
    // Middleware para tratar rotas não encontradas (404)
    app.use((req, res) => {
        res.status(404).send('Not found');
    });
    return app;
};
exports.CreateServer = CreateServer;
