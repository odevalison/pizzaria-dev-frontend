import { Button } from '@/components/common/button'
import { Input } from '@/components/common/input'
import styles from './signup-form.module.scss'

export const SignupForm = () => {
  return (
    <form className={styles.form}>
      <Input
        type='text'
        name='name'
        placeholder='Digite seu nome completo'
        required
      />
      <Input
        type='email'
        name='email'
        placeholder='Digite seu e-mail'
        required
      />
      <Input
        type='password'
        name='password'
        placeholder='Digite sua senha'
        required
      />
      <Button type='submit'>Acessar</Button>
    </form>
  )
}
