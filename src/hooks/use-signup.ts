'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  type CreateUserData,
  createUserSchema
} from '@/actions/create-user/schema'

export const useSignup = () => {
  return useForm<CreateUserData>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })
}
