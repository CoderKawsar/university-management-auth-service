import mongoose, { Model } from 'mongoose'

export type IAcademicDepartment = {
  title: string
  academicFaculty: mongoose.Types.ObjectId
}

export type AcademicDepartmentModel = Model<
  IAcademicDepartment,
  Record<string, unknown>
>

export type IAcademicDepartmentFilters = {
  searchTerm: string
}
