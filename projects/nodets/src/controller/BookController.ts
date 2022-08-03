import {Request, Response} from 'express' 

class BookController {

    public index(req: Request, res: Response) {
        res.render('index')
    }

    public create(req: Request, res: Response) {
        res.render('index')
    }

    public store(req: Request, res: Response) {
        res.render('index')
    }

    public show(req: Request, res: Response) {
        res.render('index')
    }

    public edit(req: Request, res: Response) {
        res.render('index')
    }

    public update(req: Request, res: Response) {
        res.render('index')
    }

    public destroy(req: Request, res: Response) {
        res.render('index')
    }
}

export const bookController = new BookController();
