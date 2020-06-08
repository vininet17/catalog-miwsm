import express, { request } from 'express';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const itemsController = new ItemsController;

routes.get('/items', itemsController.index);

export default routes;