"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
require("./shared/container");
const class_routes_1 = require("./modules/class/routes/class.routes");
require("module-alias/register");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/classes", class_routes_1.classRoutes);
app.listen(3000, () => console.log("Server esta rodando na porta 3000 !"));
function isValidTimeForShift(turno, startTime, endTime) {
    function parseTime(time) {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes; // Retorna total de minutos
    }
    const start = parseTime(startTime); // ex: "07:30"
    const end = parseTime(endTime); // ex: "11:00"
    if (turno === 'MORNING') {
        return start >= 420 && end <= 719; // 07:00 (420 minutos) e 11:59 (719 minutos)
    }
    if (turno === 'AFTERNOON') {
        return start >= 720 && end <= 1079; // 12:00 to 17:59
    }
    return false;
}
