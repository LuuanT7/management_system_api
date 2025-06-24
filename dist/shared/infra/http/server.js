"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
const chalk_1 = __importDefault(require("chalk"));
const express_1 = require("@config/express");
const app = (0, express_1.CreateServer)();
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(chalk_1.default.green(`Servidor rodando em: http://localhost:${port}`));
});
