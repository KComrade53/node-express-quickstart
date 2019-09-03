import { Router, /* , Request, Response */ } from 'express';
import { Routes as APIRoutes, } from './routes/api';

const router: Router = Router();

router.use('/api', APIRoutes);

export const Routes = router;