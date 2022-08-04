import { Router, Request } from 'express';
import { indexController } from '../controller/IndexController';
import { bookController } from '../controller/BookController';

const router:Router =  Router();

router.get('/', indexController.index);
router.get('/create', bookController.create);
router.get('/api', bookController.index);

export default router;
