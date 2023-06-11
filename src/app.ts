import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import routes from './app/routes'

const app: Application = express()

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// use cors
app.use(cors())

// application routes
app.use('/api/v1/', routes)
// app.use('/api/v1/users', UserRoutes)
// app.use('/api/v1/academic-semesters', AcademicSemesterRoutes)

// testing
// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World!')
// })
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   Promise.reject(new Error('Unhandled Promise Rejection!'))
// console.log(x)
// })

// global error handler
app.use(globalErrorHandler)

// handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Page not found!',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API not found!',
      },
    ],
  })
  next()
})

export default app
