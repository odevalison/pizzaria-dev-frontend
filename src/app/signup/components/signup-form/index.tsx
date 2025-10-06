'use client'

import { useRouter } from 'next/navigation'
import { createUser } from '@/actions/create-user'
import type { CreateUserData } from '@/actions/create-user/schema'
import { Button } from '@/components/common/button'
import { Input } from '@/components/common/input'
import { useSignup } from '@/hooks/use-signup'
import styles from './signup-form.module.scss'

export const SignupForm = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useSignup()

  const handleRegister = async (data: CreateUserData) => {
    try {
      const { error } = await createUser(data)
      if (error) throw new Error('Erro ao criar conta, tente novamente.')

      router.push('/')
    } catch (error) {
      console.log((error as Error).message)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleRegister)} className={styles.form}>
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
