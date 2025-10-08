import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/logo-pizzaria.svg'
import { AuthUserForm } from './components/auth-user-form'
import styles from './page.module.scss'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Image src={logo} width={335} alt='Logo pizzaria dev' />

      <section className={styles.login}>
        <AuthUserForm />

        <p className={styles.signupText}>
          Ainda não possui conta?{' '}
          <Link href='/create-account' className={styles.signupLink}>
            Crie sua conta.
          </Link>
        </p>
      </section>
    </div>
  )
}

export default HomePage
