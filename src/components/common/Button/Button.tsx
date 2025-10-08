import { Loader2 } from 'lucide-react'
import { Poppins } from 'next/font/google'
import type { ComponentProps, ReactNode } from 'react'
import styles from './Button.module.scss'

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode
  type?: ComponentProps<'button'>['type']
  loading?: boolean
}

const poppins = Poppins({ subsets: ['latin'], weight: '600' })

export const Button = ({
  children,
  loading = false,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${poppins.className}`}
      {...props}
    >
      {loading && <Loader2 className={styles.loader} />}
      {children}
    </button>
  )
}
