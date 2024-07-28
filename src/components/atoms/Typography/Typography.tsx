import clsx from 'clsx'
import styles from './Typography.module.scss'

const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  inherit: 'p'
}

interface ITypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant: keyof typeof defaultVariantMapping
  variantMapping?: typeof defaultVariantMapping | Record<string, string>
}

const Typography = (props: ITypographyProps) => {
  const { variant, variantMapping, className, ...rest } = props

  const Component = variantMapping?.[variant] || defaultVariantMapping[variant]

  const typorgraphyClassName = clsx(styles[Component], className)

  const propsComponent = {
    ...rest,
    className: typorgraphyClassName
  }

  return <Component {...propsComponent} />
}

export default Typography
