import * as React from 'react'

export function Main({ children }: React.PropsWithChildren) {
  return (
    <main className="p-12 w-full">
      <div className="max-w-3xl mx-auto">
        <div className="w-full">{children}</div>
      </div>
    </main>
  )
}
