"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classRoutes = void 0;
const express_1 = require("express");
const ClassController_1 = require("../controllers/ClassController");
const classRoutes = (0, express_1.Router)();
exports.classRoutes = classRoutes;
const classController = new ClassController_1.ClassController();
// Com async/await explícito
classRoutes.get("/", async (req, res, next) => {
    try {
        await classController.list(req, res);
    }
    catch (error) {
        next(error);
    }
});
