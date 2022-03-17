import dotenv from 'dotenv';
dotenv.config();

export const port = process.env.PORT || 3000;

export const baseUrl = process.env.BASE_URL || `http://localhost:${port}`;
