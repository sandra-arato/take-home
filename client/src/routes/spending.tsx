import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/spending')({
  component: Spending,
})

function Spending() {
  return (
    <div className="p-4">
      <h1>Spending</h1>
    </div>
  )
}
