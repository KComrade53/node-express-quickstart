import { Router, } from 'express';

const router: Router = Router();

router.get('/', (req, res) => {
    console.info(req);
    res.send('Hello world!');
});

router.get('/success', (req, res) => {
    const results = {
        worked: true,
        awesome: true,
        test: 'passed',
    };
    res.json(results);
});

router.get('/error', (req, res) => {
    res.sendStatus(500);
});

export const Routes = router;
