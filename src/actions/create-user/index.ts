'use server'
import { api } from '@/services/app'
import type { UserResponseData } from '@/types/response/user'
import { type CreateUserData, createUserSchema } from './schema'

export const createUser = async (data: CreateUserData) => {
  const userData = createUserSchema.safeParse(data)
  if (!userData.success) return { error: 'Invalid data.' }

  try {
    const { data: user } = await api.post<UserResponseData>('/user', {
      name: data.name,
      email: data.email,
      password: data.password
    })

    return { data: user }
  } catch (_error) {
    return { error: 'Error on create account, please try again later.' }
  }
}
