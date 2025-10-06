import { Poppins } from 'next/font/google'
import { type ComponentProps, useId } from 'react'
import styles from './input.module.scss'

interface InputProps extends ComponentProps<'input'> {
  label?: string
  errorMessage?: string
  placeholder: string
  name: string
}

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export const Input = ({
  label,
  errorMessage,
  placeholder,
  name,
  ...props
}: InputProps) => {
  const id = useId()

  return (
    <>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}

      <div className={styles.inputBox}>
        <input
          className={`${styles.input} ${poppins.className}`}
          placeholder={placeholder}
          autoComplete='off'
          name={name}
          id={id}
          {...props}
        />
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      </div>
    </>
  )
}
