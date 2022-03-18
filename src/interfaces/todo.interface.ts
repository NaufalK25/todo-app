// add id as optional parameter
import { Model } from 'sequelize';
export interface TodoAttributes {
    id?: number;
    title: string;
    description: string;
    completed: boolean;
}

export interface TodoInstance extends Model<TodoAttributes>, TodoAttributes { }
