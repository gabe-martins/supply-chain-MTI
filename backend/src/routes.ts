import { Router } from 'express'

import ProductController from './controllers/ProductController'
import InputController from './controllers/InputController'
import outputController from './controllers/OutputController'

const routes = Router();

routes.get('/products', ProductController.index)
routes.get('/product/:registrationNumber', ProductController.show)
routes.post('/products', ProductController.create)
routes.delete('/product/:registrationNumber', ProductController.delete)

routes.get('/inputs', InputController.index)
routes.get('/input/:id', InputController.show)
routes.post('/input', InputController.create)

routes.get('/outputs', outputController.index)
routes.get('/output/:id', outputController.show)
routes.post('/output', outputController.create)

export default routes