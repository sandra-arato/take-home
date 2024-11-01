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

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
]

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
          {invoices.map(invoice => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
