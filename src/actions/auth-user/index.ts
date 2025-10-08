'use server'

import axios from 'axios'
import { api } from '@/services/api'
import type { ErrorApiResponse } from '@/types/api/response/error'
import type { AuthUserApiResponse } from '@/types/api/response/user'
import { type AuthUserSchemaData, authUserSchema } from './schema'

export const authUser = async (data: AuthUserSchemaData) => {
  const { success } = authUserSchema.safeParse(data)
  if (!success) {
    return { error: 'Dados incorretos, por favor tente novamente.' }
  }

  try {
    const { data: user } = await api.post<AuthUserApiResponse>('/auth', {
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
