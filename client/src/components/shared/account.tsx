import { Card, CardTitle } from '../ui/card'

type AccountProps = {
  balance: number
  accountName: string
  bankName: string
}

export function Account({ balance, accountName, bankName }: AccountProps) {
  return (
    <Card className="rounded border-indigo-400">
      <div className="space-y-0 py-6 px-4">
        <CardTitle className="mb-2">${balance}</CardTitle>
        <p className="text-indigo-500 space-y-0">{accountName}</p>
        <p className="mt-0 space-y-0">{bankName}</p>
      </div>
    </Card>
  )
}
