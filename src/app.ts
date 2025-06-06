import express from "express";
import "reflect-metadata";
import "./shared/container";
import { classRoutes } from "./modules/class/routes/class.routes";

const app = express();
app.use(express.json());
app.use("/classes", classRoutes);

app.listen(3333, () => console.log("Server esta rodando na porta 3333"));
