import { Request, Response } from 'express';

class IndexController {
    public index(req: Request, res: Response) {
        res.render('index', { title: 'Bienvenido a la aplicacion de libros' })
    }
}

export const indexController = new IndexController();
