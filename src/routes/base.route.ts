import { Express } from 'express';
import { baseUrl } from '../config/constants';

export const baseRoutes = (app: Express) => {
    app.route('/').
        get((req, res) => {
            res.render('index', {
                title: '',
                metaUrl: baseUrl,
                metaImage: `${baseUrl}favicon.ico`,
                metaDescription: '',
                layout: 'layouts/base',
                styles: ['output'],
                scripts: ['global', 'index'],
            })
        });
    app.use('*', (req, res) => {
        res.status(404).send('Not Found');
    });
};
