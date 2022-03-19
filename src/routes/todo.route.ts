import { Express } from 'express';
import { deleteTodo, getTodos, postTodo, putTodo } from '../controllers/todo.controller';

const todoRoutes = (app: Express) => {
    app.route('/')
        .get(getTodos)
        .post(postTodo)
        .put(putTodo)
        .delete(deleteTodo);
};

export default todoRoutes;
