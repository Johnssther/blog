import express from 'express';
import path from 'path';
import {create} from "express-handlebars";

import IndexRoutes from './routes'

// Initializations
const app = express();


// Settings
app.set('port', process.env.PORT || 3000);

app.set("views", path.join(__dirname, "views"));

const exphbs = create({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers')
});
app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});
app.use('/books', IndexRoutes);

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Servidor inicializado en el puerto ${app.get('port')} localhost:${app.get('port')}`);
})
