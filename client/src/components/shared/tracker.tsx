import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'

type TrackerProps = {
  balance: number
  accountName: string
}

export function Tracker({ balance, accountName }: TrackerProps) {
  return (
    <Card className="rounded">
      <CardHeader>
        <CardTitle>${balance}</CardTitle>
        <CardDescription>{accountName}</CardDescription>
      </CardHeader>
    </Card>
  )
}
