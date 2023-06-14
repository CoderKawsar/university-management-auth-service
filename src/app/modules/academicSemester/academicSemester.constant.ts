import {
  IAcademicSemesterCodes,
  IAcademicSemesterTitles,
  IMonths,
} from './academicSemester.interface'

export const months: IMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const academicSemesterTitles: IAcademicSemesterTitles[] = [
  'Autumn',
  'Summer',
  'Fall',
]

export const academicSemesterCodes: IAcademicSemesterCodes[] = [
  '01',
  '02',
  '03',
]

export const academicSemesterTitleCodeMapper: {
  [key: string]: string
} = {
  Authumn: '01',
  Summer: '02',
  Fall: '03',
}

export const academicSemesterSearchableFields: string[] = [
  'title',
  'code',
  'year',
]

export const filterableFields: string[] = [
  'searchTerm',
  'title',
  'code',
  'year',
]
