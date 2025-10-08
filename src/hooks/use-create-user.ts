'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  type CreateUserSchemaData,
  createUserSchema
} from '@/actions/create-account/schema'

export const useCreateUser = () => {
  return useForm<CreateUserSchemaData>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })
}
