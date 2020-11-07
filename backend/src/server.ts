import express from 'express'
import './database/connection'
import routes from './routes'
import cors from 'cors'
import 'express-async-errors'

import errorHandler from './errors/handler'

import './database/connection'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errorHandler)

app.listen(process.env.APP_PORT, () => {
  console.log('server running!!!')
})