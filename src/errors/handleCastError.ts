import httpStatus from 'http-status'
import mongoose from 'mongoose'
import { IGenericErrorMessage } from '../interfaces/error'

const handleCastError = (error: mongoose.Error.CastError) => {
  const errors: IGenericErrorMessage[] = [
    { path: error.path, message: 'Invalid ID' },
  ]

  const statusCode = httpStatus.NOT_FOUND
  return {
    statusCode,
    message: 'Cast Error',
    errorMessages: errors,
  }
}

export default handleCastError
