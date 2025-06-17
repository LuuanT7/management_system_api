import express from "express";
import "reflect-metadata";
import "./shared/container";
import { classRoutes } from "./modules/class/routes/class.routes";
import 'module-alias/register';
import { activityRoutes } from "./modules/class/activity/dtos/routes/activity.routes";
app.use("/activities", activityRoutes);

const app = express();

app.use(express.json());
app.use("/classes", classRoutes);

app.listen(3333, () => console.log("Server esta rodando na porta 3333"));

function isValidTimeForShift(turno: 'MORNING' | 'AFTERNOON', startTime: string, endTime: string): boolean {
    function parseTime(time: string): number {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes; // Retorna total de minutos
    }

    const start = parseTime(startTime); // ex: "07:30"
    const end = parseTime(endTime);     // ex: "11:00"

    if (turno === 'MORNING') {
    return start >= 420 && end <= 719; // 07:00 (420 minutos) e 11:59 (719 minutos)
}

     if (turno === 'AFTERNOON') {
    return start >= 720 && end <= 1079; // 12:00 to 17:59
  }

    return false;
}
