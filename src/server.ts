import { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './shared/logger'

// uncaughtException => synchronous code problem
process.on('uncaughtException', error => {
  // console.log('Uncaught Exception Detected . . .')
  errorLogger.error(error)
  process.exit(1)
})

let server: Server

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    // eslint-disable-next-line no-console
    logger.info('Database connected successfully')

    server = app.listen(config.port, () => {
      // eslint-disable-next-line no-console
      logger.info(`Example app listening on port ${config.port}`)
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    errorLogger.error('Failed to connect to Database', error)
  }

  // unhandledRejection => asynchronous code problem
  process.on('unhandledRejection', error => {
    console.log(
      'Unhandled rejection is detected, we are closing our server . . .'
    )

    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

bootstrap()

// console.log(x)

// SIGTERM(Signal Termination) => terminating application abruptly sending signal
process.on('SIGTERM', () => {
  logger.info('SIGTERM is recieved')
  if (server) {
    server.close()
  }
})
