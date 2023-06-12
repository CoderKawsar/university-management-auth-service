import { z } from 'zod'
import {
  academicSemesterCodes,
  academicSemesterTitles,
  months,
} from './academicSemester.constant'

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum([...academicSemesterTitles] as [string, ...string[]], {
      required_error: 'Title is required',
    }),
    year: z.string({ required_error: 'Year is required' }),
    code: z.enum([...academicSemesterCodes] as [string, ...string[]]),
    startMonth: z.enum([...months] as [string, ...string[]], {
      required_error: 'startMonth is required',
    }),
    endMonth: z.enum([...months] as [string, ...string[]], {
      required_error: 'endMonth is required',
    }),
  }),
})

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
}
