import { DataTypes } from 'sequelize';
import sequelize from '../config/database';
import { TodoAttributes, TodoInstance } from '../types/todo';

const Todo = sequelize.define<TodoInstance, TodoAttributes>('todo', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
});

export default Todo;
