import styles from './Button.module.scss'
import type { FC, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'base' | 'green' | 'transparent'
  width?: number
  fontSize?: number
  isDisabled?: boolean
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'base',
  width = 275,
  fontSize = 24,
  isDisabled = false,
  ...otherProps
}) => {
  const currentVariantClass: string = styles[variant]

  return (
    <button
      style={{ width: `${width}px`, fontSize: `${fontSize}px` }}
      type="button"
      className={`${styles.btn} ${currentVariantClass}`}
      disabled={isDisabled}
      {...otherProps}
    >
      {children}
    </button>
  )
}
