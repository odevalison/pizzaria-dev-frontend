import { Button } from '@/components/common/button'
import { Input } from '@/components/common/input'
import styles from './login-form.module.scss'

const LoginForm = () => {
  return (
    <form className={styles.form}>
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

export default LoginForm
