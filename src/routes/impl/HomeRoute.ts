import { Request, Response } from 'express';
import Route from '../Route';

class HomeRoute extends Route {
    constructor() {
        super({
            name: 'HomePage',
            type: 'get',
            url: '/',
        });
    }

    run(req: Request, res: Response) {
        res.render('HomePage');
    }
}

export default new HomeRoute();
