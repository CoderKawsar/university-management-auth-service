import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { AcademicSemesterController } from './academicSemester.controller'
import { AcademicSemesterValidation } from './academicSemester.validation'

const router = express.Router()

// create a semester
router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createSemester
)

// get all semster data with pagination and query
router.get('/', AcademicSemesterController.getAllSemesters)
router.get('/:id', AcademicSemesterController.getSingleSemester)
router.patch(
  '/:id',
  validateRequest(AcademicSemesterValidation.updateAcademicSemesterZodSchema),
  AcademicSemesterController.updateSingleSemester
)
router.delete('/:id', AcademicSemesterController.deleteSingleSemester)

export const AcademicSemesterRoutes = router
