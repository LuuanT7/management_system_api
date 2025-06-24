"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = authenticate;
const jsonwebtoken_1 = require("jsonwebtoken");
const AppError_1 = require("../../../../shared/errors/AppError");
const chalk_1 = __importDefault(require("chalk"));
function authenticate(request, response, next) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new AppError_1.AppError('Token JWT não fornecido', 401);
    }
    const [, token] = authHeader.split(' ');
    try {
        const decoded = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        const { sub, id, name, role } = decoded;
        request.user = {
            id: id || sub, // Mantém compatibilidade com tokens antigos
            name,
            role,
        };
        console.log("USER AUTHENTICATED", chalk_1.default.green(request.user));
        return next();
    }
    catch (err) {
        console.log("ERROR", chalk_1.default.red(err));
        throw new AppError_1.AppError('Token JWT inválido', 401);
    }
}
