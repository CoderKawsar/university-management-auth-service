import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { paginationFields } from '../../../constants/pagination'
import catchAsync from '../../../shared/catchAsync'
import pick from '../../../shared/pick'
import sendResponse from '../../../shared/sendResponse'
import { filterableFields } from './academicFaculty.constant'
import { IAcademicFaculty } from './academicFaculty.interface'
import { AcamedicFacultyService } from './academicFaculty.service'

const createFaculty = catchAsync(async (req: Request, res: Response) => {
  const { ...academicFacultyData } = req.body
  const createdFaculty = await AcamedicFacultyService.createFaculty(
    academicFacultyData
  )

  sendResponse<IAcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty created successfully!',
    meta: null,
    data: createdFaculty,
  })
})

const getAllFaculties = catchAsync(async (req: Request, res: Response) => {
  const paginationOptions = pick(req.query, paginationFields)
  const filters = pick(req.query, filterableFields)

  const result = await AcamedicFacultyService.getAllFaculties(
    filters,
    paginationOptions
  )

  sendResponse<IAcademicFaculty[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All academic faculty data served successfully!',
    meta: result.meta,
    data: result.data,
  })
})

const getSingleFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id

  const result = await AcamedicFacultyService.getSingleFaculty(id)

  sendResponse<IAcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester data served successfully!',
    data: result,
  })
})

const updateSingleFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body

  const result = await AcamedicFacultyService.updateSingleFaculty(
    id,
    updatedData
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic faculty updated successfully!',
    data: result,
  })
})

const deleteSingleFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id

  const result = await AcamedicFacultyService.deleteSingleFaculty(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty deleted successfully!',
    data: result,
  })
})

export const AcademicFacultyController = {
  createFaculty,
  getAllFaculties,
  getSingleFaculty,
  updateSingleFaculty,
  deleteSingleFaculty,
}
