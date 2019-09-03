/*
* API definitions for /api
*/

import { Router, } from 'express';
import { Routes as V1Routes, } from './api/v1';

const router: Router = Router();
router.use('/v1', V1Routes);

export const Routes = router;
