import express from 'express'
import { userRoute } from '../modules/user/users.route'
import { semesterRoute } from '../modules/academicSemester/academicSemester.route'
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academic.Faculty.route'
import { academicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route'
import { StudentRoutes } from '../modules/student/student.route'
const router = express.Router()

const moduleRoutes = [
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/academic-semester',
    route: semesterRoute,
  },
  {
    path: '/faculty',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/department',
    route: academicDepartmentRoutes,
  },
  {
    path: '/student',
    route: StudentRoutes,
  },
]
// router.use('/users/', userRoute)
// router.use('/academic-semester', semesterRoute)

moduleRoutes.forEach(route => router.use(route.path, route.route))

export const managedRoutes = router
