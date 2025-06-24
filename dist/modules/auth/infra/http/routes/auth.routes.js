"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const AuthController_1 = require("@modules/auth/infra/http/controllers/AuthController");
const authRoutes = (0, express_1.Router)();
exports.authRoutes = authRoutes;
const authController = new AuthController_1.AuthController();
authRoutes.post('/sessions', authController.authenticate);
