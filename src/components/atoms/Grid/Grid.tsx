import clsx from 'clsx'
import styles from './Grid.module.scss'

type IGridItemSize = 1 | 2 | 3 | 4 | 6 | 12

interface IGridProps extends React.HTMLAttributes<HTMLDivElement> {
  item?: boolean
  container?: boolean
  spacing?: number

  xs?: IGridItemSize
  sm?: IGridItemSize
  md?: IGridItemSize
  lg?: IGridItemSize
  xl?: IGridItemSize
}

const Grid = (props: IGridProps) => {
  const {
    item,
    container,
    spacing,
    xs,
    sm,
    md,
    lg,
    xl,
    className,
    children,
    ...rest
  } = props

  const gridClassName = clsx(
    {
      [styles['grid-container']]: container,
      [styles['grid-item']]: item,
      [styles[`grid-item-xs-${xs}`]]: xs,
      [styles[`grid-item-sm-${sm}`]]: sm,
      [styles[`grid-item-md-${md}`]]: md,
      [styles[`grid-item-lg-${lg}`]]: lg,
      [styles[`grid-item-xl-${xl}`]]: xl
    },
    className
  )

  const propsComponent = {
    ...rest,
    className: gridClassName
  }

  return (
    <div {...propsComponent} style={{ gap: container && `${spacing * 8}px` }}>
      {children}
    </div>
  )
}

export default Grid
