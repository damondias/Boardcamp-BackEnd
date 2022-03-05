import express from 'express';
import validateSchemasMiddleware from '../middlewares/validateSchemasMiddleware.js';
import gameSchema from '../schemas/gameSchema.js';
import { postGames, getGames } from '../controllers/gamesController.js';

const gamesRouter = express.Router();

gamesRouter.post('/categories', validateSchemasMiddleware(gameSchema), postGames);
gamesRouter.get('/categories', getGames);

export default gamesRouter;