import { Router, Request } from 'express';

const router:Router =  Router();

router.get('/', (req: Request, res) => {
    res.send('books');
});
router.get('/create', (req: Request, res) => {
    res.render('index', { title: 'welcome to books app' });
    // res.send('Formulario para crear un libro');
});

export default router;
