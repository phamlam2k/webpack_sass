import './Button.scss'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'border'
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
    ...rest
  } = props

  return (
    <button className={`button ${`button-${variant}`} ${className}`} {...rest}>
      {startIcon && <span>{startIcon}</span>}
      {children}
      {endIcon && <span>{endIcon}</span>}
    </button>
  )
}

export default Button
