import "reflect-metadata";
import express from "express";
import server from "./server";
import { PORT } from "./config/envs";
import router from "./routes";
import { AppDataSource } from "./config/dataSource";

AppDataSource.initialize()
  .then(() => {
    server.use(express.json());
    server.use(router);
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error("Error initializing data source:", error));
