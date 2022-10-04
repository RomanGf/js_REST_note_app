import { Sequelize } from "sequelize";


const url = process.env["DB_DEV_URL"];

export const sequelize = new Sequelize(url as string);
