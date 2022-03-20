import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const port = 5432,
    host = process.env.DB_HOST || 'localhost',
    username = process.env.DB_USER || 'postgres',
    password = process.env.DB_PASS || 'postgres',
    database = process.env.DB_NAME || 'todos';

const sequelize = new Sequelize(`postgres://${username}:${password}@${host}:${port}/${database}`);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error(`Unable to connect to the database: ${err.message}`);
    });

export default sequelize;
