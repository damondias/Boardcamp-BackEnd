import express from 'express';
import validateSchemasMiddleware from '../middlewares/validateSchemasMiddleware.js';
import rentalSchema from '../schemas/rentalSchema.js';
import { postRentals, getRentals, postReturnRentals, deleteRentals } from '../controllers/rentalsController.js';


const rentalsRouter = express.Router();

rentalsRouter.get('/rentals', getRentals);
rentalsRouter.post('/rentals', validateSchemasMiddleware(rentalSchema), postRentals);
rentalsRouter.post('/rentals:id/return', validateSchemasMiddleware(rentalSchema), postReturnRentals);
rentalsRouter.delete('/rentals/:id', validateSchemasMiddleware(rentalSchema), deleteRentals);

export default rentalsRouter;