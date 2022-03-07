import express from 'express';
import validateSchemasMiddleware from '../middlewares/validateSchemasMiddleware.js';
import gameSchema from '../schemas/gameSchema.js';
import { postGames, getGames } from '../controllers/gamesController.js';

const gamesRouter = express.Router();

gamesRouter.post('/games', validateSchemasMiddleware(gameSchema), postGames);
gamesRouter.get('/games', getGames);

export default gamesRouter;