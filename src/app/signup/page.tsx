import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/logo-pizzaria.svg'
import styles from '../page.module.scss'
import { SignupForm } from './components/signup-form'

const SignupPage = () => {
  return (
    <div className={styles.container}>
      <Image src={logo} width={335} alt='Logo pizzaria dev' />

      <section className={styles.login}>
        <SignupForm />

        <p className={styles.signupText}>
          Já possui uma conta?{' '}
          <Link href='/' className={styles.signupLink}>
            Entre aqui.
          </Link>
        </p>
      </section>
    </div>
  )
}

export default SignupPage
