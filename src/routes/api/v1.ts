/*
 * API definitions for /api/v1
 */

import { Router, } from 'express';
import { Routes as testRoutes, } from './v1/example';

const router: Router = Router();
router.use('/test', testRoutes);

export const Routes = router;