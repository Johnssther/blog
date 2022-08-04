"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const express_handlebars_1 = require("express-handlebars");
const routes_1 = __importDefault(require("./routes"));
// Initializations
const app = (0, express_1.default)();
// Settings
app.set('port', process.env.PORT || 3000);
// Settings 
app.set("views", path_1.default.join(__dirname, "resources/views"));
const exphbs = (0, express_handlebars_1.create)({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path_1.default.join(app.get('views'), 'layouts'),
    partialsDir: path_1.default.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers')
});
app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");
// Middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// Routes
app.get('/', (req, res) => {
    res.render('index');
});
app.use('/books', routes_1.default);
// Static Files
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Servidor inicializado en el puerto ${app.get('port')} localhost:${app.get('port')}`);
});
