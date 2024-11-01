import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/spending')({
  component: Spending,
})

function Spending() {
  return (
    <div className="p-2">
      <h3>Spending</h3>
    </div>
  )
}
