import { Router, Request } from 'express';
import { indexController } from '../controller/IndexController';

const router:Router =  Router();

router.get('/', indexController.index);
router.get('/create', (req: Request, res) => {
    res.render('books/create', { title: 'welcome to books app' });
});

export default router;
