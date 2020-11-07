import { Router } from 'express'

import ProductController from './controllers/ProductController'
import InputController from './controllers/InputController'

const routes = Router();

routes.get('/products', ProductController.index)
routes.get('/product/:registrationNumber', ProductController.show)
routes.post('/products', ProductController.create)

routes.get('/inputs', InputController.index)
routes.get('/input/:id', InputController.show)
routes.post('/input', InputController.create)

export default routes