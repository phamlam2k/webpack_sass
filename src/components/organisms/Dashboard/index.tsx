import { memo } from 'react'

const DashboardOrganisms = ({ text }: { text: string }) => {
  console.log({ text })

  return (
    <div>
      <h1>Dashboard Organisms</h1>
      <p>{text}</p>
    </div>
  )
}

export default memo(DashboardOrganisms)
