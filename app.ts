import express, { urlencoded } from 'express';
import expressLayouts from 'express-ejs-layouts';
import morgan from 'morgan';
import { baseUrl, port } from './src/config/constants';
import { todoRoutes } from './src/routes/todo.route';

const app = express();

// Third Party Middlewares
app.use(morgan('dev'));
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
// Express Middlewares
app.use(express.static('public'));
app.use(express.static('dist/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
require('./src/config/database');

// Routes
todoRoutes(app);

// Start server
app.listen(port, () => {
    console.log(`Todo app is listening to ${baseUrl}`);
});
