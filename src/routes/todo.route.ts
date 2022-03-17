import { Express } from 'express';
import { getTodos, postTodo } from '../controllers/todo.controller';
import { err404 } from '../routes/error.route';

export const todoRoutes = (app: Express) => {
    app
        .route('/')
        .get(getTodos)
        .post(postTodo);
    app.use('*', err404);
};
