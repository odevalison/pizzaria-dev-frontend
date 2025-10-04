import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/button'
import { Input } from '@/components/input'
import logo from '/public/logo-pizzaria.svg'
import styles from './page.module.scss'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Image src={logo} width={335} alt='Logo pizzaria dev' />

      <section className={styles.login}>
        <form>
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

        <p className={styles.signupText}>
          Ainda não criou uma conta?{' '}
          <Link href='/signup' className={styles.signupLink}>
            Cadastre-se.
          </Link>
        </p>
      </section>
    </div>
  )
}

export default HomePage
