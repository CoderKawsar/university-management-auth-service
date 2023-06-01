import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRoutes from '../src/app/modules/users/users.route'

const app: Application = express()

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// use cors
app.use(cors())

// application routes
app.use('/api/v1/users', userRoutes)

// testing
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
