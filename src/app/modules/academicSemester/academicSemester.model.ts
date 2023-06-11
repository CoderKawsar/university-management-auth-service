import status from 'http-status'
import { Schema, model } from 'mongoose'
import ApiError from '../../../errors/ApiError'
import {
  academicSemesterCodes,
  academicSemesterTitles,
  months,
} from './academicSemester.constant'
import {
  AcademicSemesterModel,
  IAcademicSemester,
} from './academicSemester.interface'

const AcademicSemesterSchema = new Schema<IAcademicSemester>({
  title: { type: String, required: true, enum: academicSemesterTitles },
  year: { type: Number, required: true },
  code: { type: String, required: true, enum: academicSemesterCodes },
  startMonth: {
    type: String,
    required: true,
    enum: months,
  },
  endMonth: {
    type: String,
    required: true,
    enum: months,
  },
})

AcademicSemesterSchema.pre('save', async function (next) {
  const isExist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  })
  if (isExist) {
    throw new ApiError(status.CONFLICT, 'Academic semster already exists!')
  }
  next()
})

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  AcademicSemesterSchema
)

// Handling same year and semester issue
