import { createFileRoute } from '@tanstack/react-router'
import { NetWorth } from '@/components/home/netWorth'
import { Transactions } from '@/components/shared/transactions'
import { Main } from '@/components/shared/main'
import { Account } from '@/components/shared/account'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <Main>
      <div className="flex flex-row space-x-6">
        <div className="w-3/4">
          <NetWorth />
          <h2 className="pt-8 pb-2 text-xl">Accounts</h2>
          <div className="w-full flex">
            <div className="w-48 h-24 mr-3">
              <Account balance={12.34} accountName="Everyday" bankName="ING" />
            </div>
            <div className="w-48  mr-3 rounded">
              <Account balance={322.14} accountName="Savings" bankName="ING" />
            </div>
            <div className="w-48 mr-3 flex flex-col">
              <button className="flex h-full w-full px-6 border rounded border-indigo-200 hover:bg-indigo-100 justify-around">
                <span className="flex m-auto text-center text-indigo-400">
                  Add another account
                </span>
              </button>
            </div>
          </div>

          <h2 className="pt-8 pb-2 text-xl">Recent transactions</h2>
          <div className="w-full flex">
            <Transactions preview />
          </div>
        </div>
        <div className="w-1/4 bg-slate-200"></div>
      </div>
    </Main>
  )
}
