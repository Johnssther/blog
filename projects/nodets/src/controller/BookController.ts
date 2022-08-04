import {Request, Response} from 'express' 

class BookController {

    public index(req: Request, res: Response) {
        interface IBook {
            name: string,
            author: string,
            pages: number,
            publish: Date
        }
    
        const books:IBook[] = [
            {
                name: 'libro 1',
                author: 'author 1',
                pages: 170,
                publish: new Date(),
            },
            {
                name: 'libro 1',
                author: 'author 1',
                pages: 80,
                publish: new Date(),
            },
            {
                name: 'libro 1',
                author: 'author 1',
                pages: 69,
                publish: new Date(),
            }
        ]
        res.json(books);
    }

    public create(req: Request, res: Response) {
        res.render('books/create', { title: 'welcome to books app' });
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
