import { Express } from 'express';
import { deleteTodo, getTodos, postTodo } from '../controllers/todo.controller';

export const todoRoutes = (app: Express) => {
    app.route('/')
        .get(getTodos)
        .post(postTodo);
    app.route('/:todoId/delete')
    .get(deleteTodo);
};
