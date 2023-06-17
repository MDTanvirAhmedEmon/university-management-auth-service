import { NextFunction, Request, Response } from 'express'
import { userServices } from './users.services'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

const createUserToDB = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body
    const result = await userServices.createUser(user)

    // res.status(200).json({
    //   success: true,
    //   message: 'user created successfully',
    //   data: result,
    // })
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created successfully',
      data: result,
    })
    next()
  }
)

export const UserController = {
  createUserToDB,
}
