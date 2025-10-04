import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/logo-pizzaria.svg'
import LoginForm from './components/login-form'
import styles from './page.module.scss'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Image src={logo} width={335} alt='Logo pizzaria dev' />

      <section className={styles.login}>
        <LoginForm />

        <p className={styles.signupText}>
          Ainda não possui conta?{' '}
          <Link href='/signup' className={styles.signupLink}>
            Cadastre-se.
          </Link>
        </p>
      </section>
    </div>
  )
}

export default HomePage
