import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { UserService } from './user.service'

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body

    const result = await UserService.createUser(user)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created successfully!',
      meta: null,
      data: result,
    })

    next()

    // return res.status(200).json({
    //   success: true,
    //   message: 'User created successfully!',
    //   data: result,
    // })
  }
)

export const UserController = {
  createUser,
}
