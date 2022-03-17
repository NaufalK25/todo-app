import { RequestHandler } from 'express';
import { baseUrl } from '../config/constants';
import { TodoAttributes } from '../interfaces/todo.interface';
import { Todo } from '../models/todo.model';

export const getTodos: RequestHandler = (req, res) => {
    res.render('index', {
        title: 'Todo App',
        metaUrl: baseUrl,
        metaImage: `${baseUrl}favicon.ico`,
        metaDescription: 'Simple Todo App build using Node.js and Express as backend, EJS as template engine, Tailwind CSS as frontend, and Sequelize ORM with PostgreSQL as database all with TypeScript',
        themeColor: '#ffffff',
        layout: 'layouts/base',
        styles: ['output'],
        scripts: ['global', 'index'],
    });
}

export const postTodo: RequestHandler = async (req, res) => {
    await Todo
        .sync({ logging: false })
        .then(async () => {
            const todo: TodoAttributes = {
                title: req.body.title,
                description: req.body.description,
                completed: req.body.completed,
            };
            await Todo.create({
                title: todo.title,
                description: todo.description,
                completed: todo.completed,
            });
            res.json(todo);
        })
        .catch(err => console.log(`Error: ${err.message}`));
}
