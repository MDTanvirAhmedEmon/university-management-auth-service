import { User } from './users.model'

const findLastUserId = async () => {
  const lastId = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lastId
}

export const generateStudentId = async () => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0')
  const increamentedId = (parseInt(currentId as string) + 1)
    .toString()
    .padStart(5, '0')
  return increamentedId
}
