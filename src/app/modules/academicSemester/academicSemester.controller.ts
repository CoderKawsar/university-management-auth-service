import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { paginationFields } from '../../../constants/pagination'
import catchAsync from '../../../shared/catchAsync'
import pick from '../../../shared/pick'
import sendResponse from '../../../shared/sendResponse'
import { filterableFields } from './academicSemester.constant'
import { IAcademicSemester } from './academicSemester.interface'
import { AcamedicSemesterService } from './academicSemester.service'

const createSemester = catchAsync(async (req: Request, res: Response) => {
  const { ...academicSemesterData } = req.body
  const createdSemester = await AcamedicSemesterService.createSemester(
    academicSemesterData
  )

  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester created successfully!',
    meta: null,
    data: createdSemester,
  })
})

const getAllSemesters = catchAsync(async (req: Request, res: Response) => {
  const paginationOptions = pick(req.query, paginationFields)
  const filters = pick(req.query, filterableFields)

  const result = await AcamedicSemesterService.getAllSemesters(
    filters,
    paginationOptions
  )

  sendResponse<IAcademicSemester[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All academic semester data served successfully!',
    meta: result.meta,
    data: result.data,
  })
})

const getSingleSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id

  const result = await AcamedicSemesterService.getSingleSemester(id)

  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester data served successfully!',
    data: result,
  })
})

const updateSingleSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body

  const result = await AcamedicSemesterService.updateSingleSemester(
    id,
    updatedData
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester updated successfully!',
    data: result,
  })
})

const deleteSingleSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id

  const result = await AcamedicSemesterService.deleteSingleSemester(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester deleted successfully!',
    data: result,
  })
})

export const AcademicSemesterController = {
  createSemester,
  getAllSemesters,
  getSingleSemester,
  updateSingleSemester,
  deleteSingleSemester,
}
