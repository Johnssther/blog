"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookController = void 0;
class BookController {
    index(req, res) {
        const books = [
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
        ];
        res.json(books);
    }
    create(req, res) {
        res.render('books/create', { title: 'welcome to books app' });
    }
    store(req, res) {
        res.render('index');
    }
    show(req, res) {
        res.render('index');
    }
    edit(req, res) {
        res.render('index');
    }
    update(req, res) {
        res.render('index');
    }
    destroy(req, res) {
        res.render('index');
    }
}
exports.bookController = new BookController();
