import { Express } from 'express';
import { deleteTodo, getTodos, postTodo, putTodo } from '../controllers/todo.controller';

export const todoRoutes = (app: Express) => {
    app.route('/')
        .get(getTodos)
        .post(postTodo)
        .put(putTodo)
        .delete(deleteTodo);
};
