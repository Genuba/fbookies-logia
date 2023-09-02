import { Sequelize } from "sequelize-typescript";
import { FuckBookies } from "../models/fuckBookies";
import { Team } from "../models/team";

const connection = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "postgres",
  database: "postgres",
  schema: "public",
  logging: false,
  models: [FuckBookies, Team],
});

export default connection;
