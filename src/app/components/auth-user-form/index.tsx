'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { authUser } from '@/actions/auth-user'
import type { AuthUserSchemaData } from '@/actions/auth-user/schema'
import { Button } from '@/components/common/button'
import { Input } from '@/components/common/input'
import { useAuthUser } from '@/hooks/use-auth-user'
import styles from './auth-user-form.module.scss'

export const AuthUserForm = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useAuthUser()

  const handleAuthUser = async (data: AuthUserSchemaData) => {
    try {
      const { data: user, error } = await authUser(data)

      if (error) throw new Error(error)
      if (!user || !user?.token) return

      router.push('/dashboard')
    } catch (err) {
      if (err instanceof Error) {
        setError('email', { message: err.message }, { shouldFocus: true })
        setError('password', { message: err.message })
        toast.error(err.message)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(handleAuthUser)} className={styles.form}>
      <Input
        {...register('email')}
        errorMessage={errors.email?.message}
        type='email'
        placeholder='Digite seu e-mail'
      />
      <Input
        {...register('password')}
        errorMessage={errors.password?.message}
        type='password'
        placeholder='Digite sua senha'
      />
      <Button loading={isSubmitting} type='submit'>
        Acessar
      </Button>
    </form>
  )
}
