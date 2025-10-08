'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { createAccount } from '@/actions/createAccount'
import type { CreateUserSchemaData } from '@/actions/createAccount/schema'
import { Button, Input } from '@/components/common'
import { useCreateAccount } from '@/hooks/useCreateAccount'
import styles from './CreateAccountForm.module.scss'

export const CreateAccountForm = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useCreateAccount()

  const handleCreateUser = async (data: CreateUserSchemaData) => {
    try {
      const { error } = await createAccount(data)

      if (error) throw new Error(error)

      router.push('/')
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(handleCreateUser)} className={styles.form}>
      <Input
        {...register('name')}
        type='text'
        placeholder='Digite seu nome completo'
        errorMessage={errors.name?.message}
      />
      <Input
        {...register('email')}
        type='email'
        placeholder='Digite seu e-mail'
        errorMessage={errors.email?.message}
      />
      <Input
        {...register('password')}
        type='password'
        placeholder='Digite sua senha'
        errorMessage={errors.password?.message}
      />
      <Button loading={isSubmitting} type='submit'>
        Cadastrar
      </Button>
    </form>
  )
}
