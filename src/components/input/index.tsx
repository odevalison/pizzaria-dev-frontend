import { Poppins } from 'next/font/google'
import { type ComponentProps, useId } from 'react'
import styles from './styles.module.scss'

interface InputProps extends ComponentProps<'input'> {
  label?: string
  placeholder: string
  name: string
}

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export const Input = ({ label, placeholder, name, ...props }: InputProps) => {
  const inputId = useId()

  return (
    <>
      {!!label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}

      <input
        className={`${styles.input} ${poppins.className}`}
        id={inputId}
        placeholder={placeholder}
        name={name}
        autoComplete='off'
        {...props}
      />
    </>
  )
}
