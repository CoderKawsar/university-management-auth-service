import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { paginationFields } from '../../../constants/pagination'
import catchAsync from '../../../shared/catchAsync'
import pick from '../../../shared/pick'
import sendResponse from '../../../shared/sendResponse'
import { filterableFields } from './academicDepartment.constant'
import { IAcademicDepartment } from './academicDepartment.interface'
import { AcamedicDepartmentService } from './academicDepartment.service'

const createDepartment = catchAsync(async (req: Request, res: Response) => {
  const { ...academicDepartmentData } = req.body
  const createdDepartment = await AcamedicDepartmentService.createDepartment(
    academicDepartmentData
  )

  sendResponse<IAcademicDepartment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Department created successfully!',
    meta: null,
    data: createdDepartment,
  })
})

const getAllDepartments = catchAsync(async (req: Request, res: Response) => {
  const paginationOptions = pick(req.query, paginationFields)
  const filters = pick(req.query, filterableFields)

  const result = await AcamedicDepartmentService.getAllDepartments(
    filters,
    paginationOptions
  )

  sendResponse<IAcademicDepartment[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Academic Department data served successfully!',
    meta: result.meta,
    data: result.data,
  })
})

const getSingleDepartment = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id

  const result = await AcamedicDepartmentService.getSingleDepartment(id)

  sendResponse<IAcademicDepartment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Department Data Served Successfully!',
    data: result,
  })
})

const updateSingleDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id
    const updatedData = req.body

    const result = await AcamedicDepartmentService.updateSingleDepartment(
      id,
      updatedData
    )

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department updated successfully!',
      data: result,
    })
  }
)

const deleteSingleDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id

    const result = await AcamedicDepartmentService.deleteSingleDepartment(id)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department deleted successfully!',
      data: result,
    })
  }
)

export const AcademicDepartmentController = {
  createDepartment,
  getAllDepartments,
  getSingleDepartment,
  updateSingleDepartment,
  deleteSingleDepartment,
}
