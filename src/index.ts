import "reflect-metadata";
import express from "express";
import cors from "cors";
import server from "./server";
import { PORT } from "./config/envs";
import router from "./routes";
import { AppDataSource } from "./config/dataSource";

AppDataSource.initialize()
  .then(() => {
    server.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
    server.use(express.json());
    server.use(router);
    server.listen(PORT || 3000, () => console.log(`Server running on port ${PORT || 3000}`));
  })
  .catch((error) => console.error("Error initializing data source:", error));
