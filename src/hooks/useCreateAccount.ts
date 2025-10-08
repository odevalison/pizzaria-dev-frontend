'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  type CreateUserSchemaData,
  createUserSchema
} from '@/actions/createAccount/schema'

export const useCreateAccount = () => {
  return useForm<CreateUserSchemaData>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })
}
