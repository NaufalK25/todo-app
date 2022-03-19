import { Model } from 'sequelize';

type FlashMessageOption = {
    message: string;
    type: string;
    svg: string;
}

export interface TodoAttributes {
    id?: number;
    title: string;
    description: string;
    completed: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface TodoInstance extends Model<TodoAttributes>, TodoAttributes { }

export default FlashMessageOption;
