import { RequestHandler } from "express";
import { baseUrl } from '../config/constants';

export const err404: RequestHandler = (req, res) => {
    res.status(404).render('404', {
        title: '404 Not Found',
        metaUrl: baseUrl,
        metaImage: `${baseUrl}favicon.ico`,
        metaDescription: '404 Not Found',
        themeColor: '#f44336',
        layout: 'layouts/base',
        styles: ['output'],
        scripts: ['global', 'index'],
    });
}
