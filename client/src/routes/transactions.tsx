import { Main } from '@/components/shared/main'
import { createFileRoute } from '@tanstack/react-router'
import { Transactions as TransactionsTable } from '@/components/shared/transactions'

export const Route = createFileRoute('/transactions')({
  component: Transactions,
})

function Transactions() {
  return (
    <Main>
      <TransactionsTable />
    </Main>
  )
}
