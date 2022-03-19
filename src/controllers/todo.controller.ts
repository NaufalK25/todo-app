import { RequestHandler } from 'express';
import { baseUrl } from '../config/constants';
import { errorFlashMessage, generateFlashMessage } from '../helpers/todo.helper';
import Todo from '../models/todo.model';

export const getTodos: RequestHandler = async (req, res) => {
    try {
        const todos = await Todo.findAll();
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
    } catch (err) {
        res.status(500).send('Server Error!');
    }
}

export const postTodo: RequestHandler = async (req, res) => {
    const title = req.body.title.trim();
    const description = req.body.description.trim();
    const completed = req.body.completed;

    try {
        await Todo.create({
            title,
            description,
            completed,
        });
        generateFlashMessage(req, {
            message: `${title} added successfully!`,
            type: 'success',
            svg: `
                <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
            `,
        });
    } catch (err) {
        errorFlashMessage(req, `Failed to add ${title}!`);
    }
    res.redirect('/');
}

export const putTodo: RequestHandler = async (req, res) => {
    const id = req.body.todoId;
    const title = req.body.todoTitle;
    const todoCompleted = req.body.todoCompleted;

    const completed = (todoCompleted === 'true') ? false : true;

    try {
        await Todo.update({ completed, }, { where: { id, }, });
        generateFlashMessage(req, {
            message: `${title} has been updated to ${completed ? '' : 'in'}complete!`,
            type: 'warning',
            svg: `
                <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
            `,
        });
    } catch (err) {
        errorFlashMessage(req, `Failed to update ${title}!`);
    }
    res.redirect('/');
}

export const deleteTodo: RequestHandler = async (req, res) => {
    const id = req.body.todoId;
    const title = req.body.todoTitle;

    try {
        await Todo.destroy({ where: { id, }, });
        errorFlashMessage(req, `${title} deleted successfully!`);
    } catch (err) {
        errorFlashMessage(req, `Failed to delete ${title}!`);
    }
    res.redirect('/');
}
