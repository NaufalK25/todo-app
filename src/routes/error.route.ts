import { RequestHandler } from "express";
import { baseUrl } from '../config/constants';

export const err404: RequestHandler = (req, res) => {
    res.status(404).render('404', {
        title: '404 Not Found',
        meta: {
            url: baseUrl,
            image: `${baseUrl}favicon.ico`,
            description: '404 Not Found',
        },
        themeColor: '#e74c3c',
        layout: 'layouts/base',
        styles: ['output'],
        scripts: ['global', 'index'],
    });
}
