'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { createAccount } from '@/actions/create-account'
import type { CreateUserSchemaData } from '@/actions/create-account/schema'
import { Button } from '@/components/common/button'
import { Input } from '@/components/common/input'
import { useCreateUser } from '@/hooks/use-create-user'
import styles from './create-account-form.module.scss'

export const CreateAccountForm = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useCreateUser()

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
