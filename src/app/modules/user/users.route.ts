import express from 'express'
import { UserController } from './users.controller'
import validateRequest from '../../middlewares/validateRequest'
import { UserValidation } from './users.validation'

const router = express.Router()

router.post(
  '/create-user',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUserToDB
)

export const userRoute = router
