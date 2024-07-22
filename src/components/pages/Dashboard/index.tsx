import Button from '@components/atoms/Button/Button'
import useCounterStore from '@store/counters/counters.store'
import { IStateCountersProps } from '@store/counters/counters.type'

const DashboardPage = () => {
  const { count, increment } = useCounterStore(
    (state: IStateCountersProps) => state
  )

  return (
    <div>
      <h1>DashboardPage</h1>
      <p>{count}</p>
      <Button onClick={() => increment(1)}>Primary</Button>
    </div>
  )
}

export default DashboardPage
