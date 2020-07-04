import { Router } from 'express';

import SessionsControllers from '../controllers/SessionsController';

const sessionsController = new SessionsControllers();

const sessionsRouter = Router();

sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;
