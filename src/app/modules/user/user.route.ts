import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { UserController } from './user.controller'
import { userValidation } from './user.validation'

const router = Router()

router.post(
  '/create-user',
  validateRequest(userValidation.createUserZodSchema),
  UserController.createUser
)

export const UserRoutes = router
