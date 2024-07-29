import React from 'react'
import clsx from 'clsx'
import styles from './Button.module.scss'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'border'
  size?: 'small' | 'large'
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

const Button = (props: IButtonProps) => {
  const {
    variant = 'primary',
    className,
    startIcon,
    endIcon,
    children,
    size = 'small',
    ...rest
  } = props

  const buttonClassName = clsx(
    styles.button,
    {
      [styles['button--primary']]: variant === 'primary',
      [styles['button--secondary']]: variant === 'secondary',
      [styles['button--large']]: size === 'large',
      [styles['button--small']]: size === 'small'
    },
    className
  )

  return (
    <button className={buttonClassName} {...rest}>
      {startIcon && <span>{startIcon}</span>}
      {children}
      {endIcon && <span>{endIcon}</span>}
    </button>
  )
}

export default Button
