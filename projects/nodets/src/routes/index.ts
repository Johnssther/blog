import { Router, Request } from 'express';

const router:Router =  Router();

router.get('/', (req: Request, res) => {
    res.render('books');
});
router.get('/create', (req: Request, res) => {
    res.render('books/create', { title: 'welcome to books app' });
});

export default router;
