import express from 'express';
import dotenv from 'dotenv';

import { Routes, } from './routes';
import { setupFirebase, } from './utils/firebase';

// initialize configuration
dotenv.config();

const port = process.env.SERVER_PORT; // default port to listen

const app = express();

setupFirebase();

app.use(Routes);

// define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('Hello world!');
});

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});