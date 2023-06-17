import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { managedRoutes } from './app/routes'
import httpStatus from 'http-status'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use('/api/v1/users/', userRoute)
// app.use('/api/v1/academic-semester', semesterRoute)
app.use('/api/v1/', managedRoutes)

app.get('/', async (req: Request, res: Response) => {
  res.send('Working Successfully')
})
app.use(globalErrorHandler)

// handle not found URL
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API not found',
      },
    ],
  })
  next()
})

export default app
