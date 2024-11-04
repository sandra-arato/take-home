import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import { categories, transactions } from '../../../../server/mockData'

type TransactionsProps = {
  preview?: boolean
}

export function Transactions({ preview = false }: TransactionsProps) {
  return (
    <div className="mb-16 w-full">
      {preview ? null : (
        <>
          <Button variant="default" className="mr-4">
            All transactions
          </Button>
          <Button variant="outline" className="mr-4">
            Sorted
          </Button>
          <Button variant="outline" className="mr-4">
            Unsorted
          </Button>
        </>
      )}
      <Table>
        {preview ? (
          <TableCaption>
            <Link to="/transactions" className="text-indigo-600">
              See all of your transactions.
            </Link>
          </TableCaption>
        ) : null}
        <TableHeader>
          <TableRow>
            <TableHead>Description</TableHead>
            <TableHead className="w-36">Account</TableHead>
            <TableHead className="w-12">Category</TableHead>
            <TableHead className="text-right w-16">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow key={`${transaction.account_id}-${index}`}>
              <TableCell className="font-medium">{transaction.date}</TableCell>
              <TableCell>{transaction.merchant_name}</TableCell>
              <TableCell>
                {
                  categories.find(
                    category => category.id === transaction.category_id,
                  )?.name
                }
              </TableCell>
              <TableCell className="text-right">{transaction.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
