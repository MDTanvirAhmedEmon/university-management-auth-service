import express from 'express'
import { AcademicSemesterValidation } from './academicSemester.validation'
import { AcademicSemesterController } from './academicSemester.controller'
import validateRequest from '../../middlewares/validateRequest'
const router = express.Router()

router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createSemester
)
router.patch(
  '/:id',
  validateRequest(AcademicSemesterValidation.updateAcademicSemesterZodSchema),
  AcademicSemesterController.updateSemester
)
router.get('/:id', AcademicSemesterController.getSingleSemester)
router.delete('/:id', AcademicSemesterController.deleteSemester)
router.get('/', AcademicSemesterController.getAllSemesters)

export const semesterRoute = router
