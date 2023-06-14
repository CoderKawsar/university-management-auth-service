import { Schema, model } from 'mongoose'
import {
  AcademicDepartmentModel,
  IAcademicDepartment,
} from './academicDepartment.interface'

const AcademicDepartmentSchema = new Schema<IAcademicDepartment>(
  {
    title: { type: String, required: true, unique: true },
    academicFaculty: { type: Schema.Types.ObjectId, ref: 'AcademicFaculty' },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)

export const AcademicDepartment = model<
  IAcademicDepartment,
  AcademicDepartmentModel
>('AcademicDepartment', AcademicDepartmentSchema)