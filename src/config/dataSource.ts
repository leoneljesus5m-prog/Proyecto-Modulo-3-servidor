import { DataSource } from "typeorm";
import { DB_PASSWORD } from "./envs";
import { User, Credential, Appointment } from "../entities";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: String(DB_PASSWORD || "admin"),
  database: "module_3",
  synchronize: true,
  dropSchema: false,
  logging: false,
  entities: [User, Credential, Appointment],
  subscribers: [],
  migrations: [],
});
