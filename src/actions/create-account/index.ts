'use server'
import axios from 'axios'
import { api } from '@/services/api'
import type { ErrorApiResponse } from '@/types/api/response/error'
import type { CreateUserApiResponse } from '@/types/api/response/user'
import { type CreateUserSchemaData, createUserSchema } from './schema'

export const createAccount = async (data: CreateUserSchemaData) => {
  const { success } = createUserSchema.safeParse(data)

  if (!success) {
    return { error: 'Dados inválidos, por favor tente novamente.' }
  }

  try {
    const { data: user } = await api.post<CreateUserApiResponse>('/user', {
      name: data.name,
      email: data.email,
      password: data.password
    })

    return { data: user }
  } catch (err) {
    if (axios.isAxiosError<ErrorApiResponse>(err)) {
      return { error: err.response?.data.error }
    }

    return { error: 'Um erro inesperado aconteceu, por favor tente novamente.' }
  }
}
