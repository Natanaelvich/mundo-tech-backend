import express from 'express'
import multer from 'multer'

import ProducController from './controllers/ProductController'
import BuyController from './controllers/BuyController'

import multerConfig from './config/multer'
const routes = express.Router()

routes.get('/products', ProducController.index)
routes.post(
  '/products',
  multer(multerConfig).single('file'),
  ProducController.store
)
routes.put(
  '/products/:_id',
  multer(multerConfig).single('file'),
  ProducController.update
)

routes.get('/sales', BuyController.index)
routes.post('/sales', BuyController.store)

export default routes
