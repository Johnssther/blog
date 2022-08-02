import express from 'express';
import path from 'path';
import { create } from 'express-handlebars';

import IndexRoutes from './routes'

// Initializations
const app = express();
const hbs = create({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'Partials'),
    helpers: require('./lib/helpers')
});

// Settings
app.set('port', process.env.PORT || 3000);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'))

// app.set('.hbs', exphbs.engine({
//     extname:'.hbs',
//     layoutsDir: path.join(app.get('views'), 'layouts'),
//     partialsDir: path.join(app.get('views'), 'Partials'),
// }))

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/books', IndexRoutes);

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Servidor inicializado en el puerto ${app.get('port')} localhost:${app.get('port')}`);
})
