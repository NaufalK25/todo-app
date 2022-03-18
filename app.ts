import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import morgan from 'morgan';
import { baseUrl, port } from './src/config/constants';
import { todoRoutes } from './src/routes/todo.route';
import { err404 } from './src/routes/error.route';

const app = express();

// Third Party Middlewares
app.use(morgan('dev'));
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
// Express Middlewares
app.use(express.static('public'));
app.use(express.static('dist/public'));
app.use(express.urlencoded({ extended: true }));

// Connect to database
require('./src/config/database');

// Routes
todoRoutes(app);
app.use('*', err404);

// Start server
app.listen(port, () => {
    console.log(`Todo app is listening to ${baseUrl}`);
});
