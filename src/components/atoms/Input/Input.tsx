import './Input.scss'

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

const Input = (props: IInputProps) => {
  const { startIcon, endIcon, className, ...rest } = props

  return (
    <div className={`input ${className}`}>
      {startIcon && <span>{startIcon}</span>}
      <input {...rest} />
      {endIcon && <span>{endIcon}</span>}
    </div>
  )
}

export default Input
