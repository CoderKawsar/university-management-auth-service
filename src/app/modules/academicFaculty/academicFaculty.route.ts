import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { AcademicFacultyController } from './academicFaculty.controller'
import { AcademicFacultyValidation } from './academicFaculty.validation'

const router = express.Router()

// create a faculty
router.post(
  '/create-faculty',
  validateRequest(AcademicFacultyValidation.createAcademicFacultyZodSchema),
  AcademicFacultyController.createFaculty
)

// get all faculty data with pagination and query
router.get('/', AcademicFacultyController.getAllFaculties)

// get a faculty data by id
router.get('/:id', AcademicFacultyController.getSingleFaculty)

// update a single faulty searched by id
router.patch(
  '/:id',
  validateRequest(AcademicFacultyValidation.updateAcademicFacultyZodSchema),
  AcademicFacultyController.updateSingleFaculty
)

// delete a single faculty by id
router.delete('/:id', AcademicFacultyController.deleteSingleFaculty)

export const AcademicFacultyRoutes = router
