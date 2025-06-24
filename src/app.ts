import express from "express";
import "reflect-metadata";
import 'module-alias/register';
import { dashboardRoutes } from '../src/modules/class/dashboard/routes/dashboard.routes';
import { classRoutes } from "./modules/class/routes/activity.routes";
import { activityRoutes } from "./modules/class/activity/dtos/routes/activity.routes";

import "./shared/container";

const app = express();

app.use(express.json());

app.use('/dashboard', dashboardRoutes);
app.use("/classes", classRoutes);
app.use("/activities", activityRoutes);

app.listen(3333, () => console.log("Server está rodando na porta 3333"));

// Função extra 

function isValidTimeForShift(turno: 'MORNING' | 'AFTERNOON', startTime: string, endTime: string): boolean {
    function parseTime(time: string): number {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    }

    const start = parseTime(startTime);
    const end = parseTime(endTime);

    if (turno === 'MORNING') {
        return start >= 420 && end <= 719;
    }

    if (turno === 'AFTERNOON') {
        return start >= 720 && end <= 1079;
    }

    return false;
}
