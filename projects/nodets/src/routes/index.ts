import { Router } from 'express';
import { bookController } from '../controller/BookController';

const router:Router =  Router();

router.get('/', bookController.index);
router.get('/create', bookController.create);
router.get('/api', bookController.api);

export default router;
