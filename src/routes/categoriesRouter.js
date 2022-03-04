import express from 'express';
import validateSchemasMiddleware from '../middlewares/validateSchemasMiddleware.js';
import categorySchema from '../schemas/categorySchema.js';
import { postCategories, getCategories } from '../controllers/categoriesController.js';

const categoriesRouter = express.Router();

categoriesRouter.post('/categories', validateSchemasMiddleware(categorySchema), postCategories);
categoriesRouter.get('/categories', getCategories);

export default categoriesRouter;