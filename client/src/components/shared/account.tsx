import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'

type AccountProps = {
  balance: number
  accountName: string
  bankName: string
}

export function Account({ balance, accountName, bankName }: AccountProps) {
  return (
    <Card className="rounded border-indigo-400">
      <CardHeader>
        <CardTitle>${balance}</CardTitle>
        <CardDescription className="text-indigo-500">
          {accountName}
          <p className="text-xs text-muted-foreground ">{bankName}</p>
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
