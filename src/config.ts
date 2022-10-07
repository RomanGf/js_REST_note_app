import { Sequelize } from 'sequelize';
import { load } from 'ts-dotenv';

const env = load({
  DB_DEV_URL: String,
});

export const sequelize = new Sequelize(env.DB_DEV_URL);
