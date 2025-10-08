'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  type AuthUserSchemaData,
  authUserSchema
} from '@/actions/authUser/schema'

export const useAuthUser = () => {
  return useForm<AuthUserSchemaData>({
    resolver: zodResolver(authUserSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })
}
