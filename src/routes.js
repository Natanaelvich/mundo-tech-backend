const express = require('express')
const multer = require('multer')

const ProducController = require('./controllers/ProductController')
const BuyController = require('./controllers/BuyController')

const multerConfig = require('./config/multer')
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

module.exports = routes
