import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { AcademicDepartmentController } from './academicDepartment.controller'
import { AcademicDepartmentValidation } from './academicDepartment.validation'

const router = express.Router()

// create a Department
router.post(
  '/create-department',
  validateRequest(
    AcademicDepartmentValidation.createAcademicDepartmentZodSchema
  ),
  AcademicDepartmentController.createDepartment
)

// get all Department data with pagination and query
router.get('/', AcademicDepartmentController.getAllDepartments)

// get a Department data by id
router.get('/:id', AcademicDepartmentController.getSingleDepartment)

// update a single faulty searched by id
router.patch(
  '/:id',
  validateRequest(
    AcademicDepartmentValidation.updateAcademicDepartmentZodSchema
  ),
  AcademicDepartmentController.updateSingleDepartment
)

// delete a single Department by id
router.delete('/:id', AcademicDepartmentController.deleteSingleDepartment)

export const AcademicDepartmentRoutes = router
