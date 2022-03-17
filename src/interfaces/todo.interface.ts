import { Model } from 'sequelize';

export interface TodoAttributes {
    title: string;
    description: string;
    completed: boolean;
}

export interface TodoInstance extends Model<TodoAttributes>, TodoAttributes { }
