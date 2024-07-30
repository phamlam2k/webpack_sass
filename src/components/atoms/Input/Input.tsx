import { forwardRef, LegacyRef, useState } from 'react'
import { OpenEyeIcon } from '@assets/icons/icons'

import styles from './Input.module.scss'
import clsx from 'clsx'

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  isError?: boolean
}

const Input = (props: IInputProps, ref: LegacyRef<HTMLInputElement>) => {
  const {
    startIcon,
    endIcon,
    className,
    isError = false,
    type,
    disabled,
    ...rest
  } = props

  const [isErrorState, setIsErrorState] = useState<boolean>(isError)
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

  const typeInput =
    type === 'password' ? (isShowPassword ? 'text' : type) : type

  const inputClassName = clsx(
    styles.input,
    {
      [styles['input--error']]: isErrorState,
      [styles['input--disabled']]: disabled
    },
    className
  )

  const inputIconRightClassName = clsx(styles['input--icon'], {
    [styles['input--icon__right']]: !!startIcon
  })

  const inputIconLeftClassName = clsx(styles['input--icon'], {
    [styles['input--icon__left']]: type === 'password' || !!endIcon
  })

  const handleChangePassword = () => {
    setIsShowPassword((prev) => !prev)
  }

  const handleBlur = () => {
    isErrorState && setIsErrorState(!isError)
  }

  return (
    <div className={inputClassName} onBlur={handleBlur}>
      {startIcon && (
        <span className={inputIconRightClassName}>{startIcon}</span>
      )}
      <input {...rest} type={typeInput} disabled={disabled} ref={ref} />
      {endIcon && <span className={inputIconLeftClassName}>{endIcon}</span>}
      {type === 'password' && (
        <span className={inputIconLeftClassName} onClick={handleChangePassword}>
          <OpenEyeIcon />
        </span>
      )}
    </div>
  )
}

export default forwardRef(Input)
