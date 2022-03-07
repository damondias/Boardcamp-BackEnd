import express from 'express';
import validateSchemasMiddleware from '../middlewares/validateSchemasMiddleware.js';
import customerSchema from '../schemas/customerSchema.js';
import { postCustomers, getCustomers, putCustomers } from '../controllers/customersController.js';

const custumersRouter = express.Router();

custumersRouter.post('/customers', validateSchemasMiddleware(customerSchema), postCustomers);
custumersRouter.get('/customers', getCustomers);
custumersRouter.get('/customers/:id', getCustomers);
custumersRouter.put('/customers/:id', validateSchemasMiddleware(customerSchema), putCustomers);

export default custumersRouter;


