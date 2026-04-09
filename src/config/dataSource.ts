import { DataSource } from "typeorm";
import { DB_PASSWORD } from "./envs";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: `${DB_PASSWORD}`,
  database: "module_3",
  synchronize: true,
  logging: false,
  entities: [],
  subscribers: [],
  migrations: [],
});
