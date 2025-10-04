import { Poppins } from 'next/font/google'
import type { ComponentProps, ReactNode } from 'react'
import styles from './styles.module.scss'

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode
  type?: ComponentProps<'button'>['type']
}

const poppins = Poppins({ subsets: ['latin'], weight: '600' })

export const Button = ({
  children,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${poppins.className}`}
      {...props}
    >
      {children}
    </button>
  )
}
