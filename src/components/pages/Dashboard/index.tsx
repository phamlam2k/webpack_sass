import Button from '@components/atoms/Button/Button'
import Grid from '@components/atoms/Grid/Grid'
import Input from '@components/atoms/Input/Input'
import Modal from '@components/atoms/Modal/Modal'
import Typography from '@components/atoms/Typography/Typography'
import DashboardOrganisms from '@components/organisms/Dashboard'
import useCounterStore from '@store/counters/counters.store'
import { IStateCountersProps } from '@store/counters/counters.type'
import { useState } from 'react'

const DashboardPage = () => {
  const { count, increment, text } = useCounterStore(
    (state: IStateCountersProps) => state
  )
  const [isModalStatus, setIsModalStatus] = useState(false)

  const handleChangeModalStatus = () => {
    setIsModalStatus((prev) => !prev)
  }

  return (
    <div>
      <h1>DashboardPage</h1>
      <p>{count}</p>
      <DashboardOrganisms text={text} />
      <Input type='password' isError />
      <Button onClick={() => increment(1)}>Primary</Button>
      <Button onClick={handleChangeModalStatus}>Open Modal</Button>
      {isModalStatus && (
        <Modal isOpen={isModalStatus} onClose={handleChangeModalStatus}>
          <div>alooooooo</div>
        </Modal>
      )}
      <Typography variant='body1'>Title</Typography>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant='h1'>Title</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h1'>Title</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default DashboardPage
