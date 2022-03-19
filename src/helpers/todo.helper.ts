import { Request } from 'express';
import FlashMessageOption from '../types/todo';

export const generateFlashMessage = (req: Request, { message, type, svg }: FlashMessageOption) => {
    req.flash('message', message);
    req.flash('type', type);
    req.flash('svg', svg);
}

export const errorFlashMessage = (req: Request, message: string) => {
    req.flash('message', message);
    req.flash('type', 'error');
    req.flash('svg', `
        <svg height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
        </svg>
    `);
}
