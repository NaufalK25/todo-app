import { RequestHandler } from 'express';
import { baseUrl } from '../config/constants';
import { Todo } from '../models/todo.model';

export const getTodos: RequestHandler = (req, res) => {
    const todos = Todo.findAll();

    todos.then(todos => {
        res.render('index', {
            title: 'Todo App',
            meta: {
                url: baseUrl,
                image: `${baseUrl}favicon.ico`,
                description: 'Simple Todo App build using Node.js and Express as backend, EJS as template engine, Tailwind CSS as frontend, and Sequelize ORM with PostgreSQL as database all with TypeScript',
            },
            themeColor: '#ffffff',
            layout: 'layouts/base',
            styles: ['output'],
            scripts: ['global', 'index'],
            todos,
            flash: {
                message: req.flash('message'),
                type: req.flash('type'),
                svg: req.flash('svg'),
            },
        });
    });
}

export const postTodo: RequestHandler = (req, res) => {
    const title = req.body.title.trim();
    const description = req.body.description.trim();
    const completed = req.body.completed;

    Todo.sync({ logging: false, })
        .then(() => {
            Todo.create({ title, description, completed, });
            req.flash('message', `${title} added successfully!`);
            req.flash('type', 'add');
            req.flash('svg', `
                <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
            `);
            res.redirect('/');
        })
        .catch(err => console.log(`Error: ${err.message}`));
}

export const putTodo: RequestHandler = (req, res) => {
    const id = req.body.todoId;
    const title = req.body.todoTitle;
    const todoCompleted = req.body.todoCompleted;

    const completed = (todoCompleted === 'true') ? false : true;

    Todo.sync({ logging: false, })
        .then(() => {
            Todo.update({ completed, }, { where: { id, }, });
            req.flash('message', `${title} has been updated to ${completed ? '' : 'in'}complete!`);
            req.flash('type', 'update');
            req.flash('svg', `
                <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
            `)
            res.redirect('/');
        })
        .catch(err => console.log(`Error: ${err.message}`));
}

export const deleteTodo: RequestHandler = (req, res) => {
    const id = req.body.todoId;
    const title = req.body.todoTitle;

    Todo.sync({ logging: false, })
        .then(() => {
            Todo.destroy({ where: { id, }, });
            req.flash('message', `${title} deleted successfully!`);
            req.flash('type', 'delete');
            req.flash('svg', `
                <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                </svg>
            `)
            res.redirect('/');
        })
        .catch(err => console.log(`Error: ${err.message}`));
}
