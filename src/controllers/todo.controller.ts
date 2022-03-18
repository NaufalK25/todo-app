import { RequestHandler } from 'express';
import { baseUrl } from '../config/constants';
import { Todo } from '../models/todo.model';

export const getTodos: RequestHandler = (req, res) => {
    const todos = Todo.findAll();

    todos.then(todos => {
        res.render('index', {
            title: 'Todo App',
            metaUrl: baseUrl,
            metaImage: `${baseUrl}favicon.ico`,
            metaDescription: 'Simple Todo App build using Node.js and Express as backend, EJS as template engine, Tailwind CSS as frontend, and Sequelize ORM with PostgreSQL as database all with TypeScript',
            themeColor: '#ffffff',
            layout: 'layouts/base',
            styles: ['output'],
            scripts: ['global', 'index'],
            todos,
        });
    });
}

export const postTodo: RequestHandler = (req, res) => {
    const title = req.body.title.trim();
    const description = req.body.description.trim();
    const completed = req.body.completed;

    Todo.sync({ logging: false })
        .then(() => {
            Todo.create({
                title,
                description,
                completed,
            });
            res.redirect('/');
        })
        .catch(err => console.log(`Error: ${err.message}`));
}

export const deleteTodo: RequestHandler = (req, res) => {
    const todoId = req.params.todoId;

    Todo.sync({ logging: false })
        .then(() => {
            Todo.destroy({
                where: {
                    id: todoId,
                }
            })
            res.redirect('/');
        });
}
