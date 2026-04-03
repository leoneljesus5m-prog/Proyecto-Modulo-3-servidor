import express from "express";
import server from "./server";
import { PORT } from "./config/envs"
import  router  from "./routes";

server.use(express.json());
server.use(router);
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
