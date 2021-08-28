import express, { Request, Response } from 'express';
import path from 'path';
import preactView from 'express-preact-views';
import { initRoutes, routeListener } from './routes/RouteHandler';

export const app = express();
export const port = 5050;

const sx = (process.argv[2] != undefined && process.argv[2].toLowerCase() == 'dev' ? 'tsx' : 'jsx');

const init = () => new Promise((resolve, reject) => {
    app.set('views', path.join(__dirname, 'views', 'pages'));
    app.set('view engine', sx);
    app.engine(sx, preactView.createEngine());

    initRoutes().then(() => routeListener());
    resolve('');
});

init();
