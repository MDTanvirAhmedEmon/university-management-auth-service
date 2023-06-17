import { Request, Response } from 'express'
import { AcademicSemesterService } from './academicSemester.services'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import pick from '../../../shared/pick'
import { paginationFields } from '../../../constants/paginations'
import { IAcademicSemester } from './academicSemester.interface'
import { academicSemesterFilterableFields } from './academicSemester.constant'

const createSemester = catchAsync(async (req: Request, res: Response) => {
  const { ...academicSemesterData } = req.body
  const result = await AcademicSemesterService.createSemester(
    academicSemesterData
  )

  // res.status(200).json({
  //   success: true,
  //   message: 'user created successfully',
  //   data: result,
  // })
  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'semester created successfully',
    data: result,
  })
})

const getAllSemesters = catchAsync(async (req: Request, res: Response) => {
  // console.log(req.query);
  // const paginationOptions = {
  //   page: Number(req.query.page),
  //   limit: Number(req.query.limit),
  //   sortBy: (req.query.sortBy),
  //   sortOrder: (req.query.sortOrder),
  // };
  // console.log(paginationOptions)
  const paginationsOptions = pick(req.query, paginationFields)
  const filters = pick(req.query, academicSemesterFilterableFields)

  const result = await AcademicSemesterService.getAllSemesters(
    paginationsOptions,
    filters
  )

  sendResponse<IAcademicSemester[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semesters retrieved successfully',
    meta: result.meta,
    data: result.data,
  })
})

const getSingleSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await AcademicSemesterService.getSingleSemester(id)

  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester retrieved successfully',
    data: result,
  })
})

const updateSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await AcademicSemesterService.updatedSemester(id, updatedData)

  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester updated successfully',
    data: result,
  })
})
const deleteSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await AcademicSemesterService.deleteSemester(id)

  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester deleted successfully',
    data: result,
  })
})

export const AcademicSemesterController = {
  createSemester,
  getSingleSemester,
  getAllSemesters,
  updateSemester,
  deleteSemester,
}
