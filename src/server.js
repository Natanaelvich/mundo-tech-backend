import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'

import routes from './routes'

const server = express()

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-gmth0.mongodb.net/loja_mundotech?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('connected to mongo')
  })
  .catch(err => {
    console.log('connected fails mongo: ' + err)
  })

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(3333, () => {
  console.log('port 3333')
})
