import flash from 'connect-flash';
import cookie from 'cookie-parser';
import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import session from 'express-session';
import methodOverride from 'method-override';
import { baseUrl, port } from './src/config/constants';
import todoRoutes from './src/routes/todo.route';

const app = express();

// Third Party Middlewares
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(methodOverride('_method'));
app.use(cookie('secret'));
app.use(session({
    cookie: { maxAge: 60000,},
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));
app.use(flash());
// Express Middlewares
app.use(express.static('public'));
app.use(express.static('dist/public'));
app.use(express.urlencoded({ extended: true }));

// Connect to database
require('./src/config/database');

// Routes
todoRoutes(app);
app.use('*', (req, res) => {
    res.status(404).send('404 Not Found!');
});

// Start server
app.listen(port, () => {
    console.log(`Todo app is listening to ${baseUrl}`);
});
