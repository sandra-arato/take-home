import { Trash, X, Check } from 'lucide-react'
import {
  createTracker,
  deleteTracker,
  updateTracker,
} from '@/store/tracker/trackerSlice'
import { Cadence, Tracker } from '../../../../server/types'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { AddTracker } from './addTracker'
import { useAppDispatch as useDispatch } from '@/store/hooks'
import { Button } from '../ui/button'
import { EditTracker } from './editTracker'

import ProgressBar from '../shared/progressBar'
// import { updateTracker } from '@/store/apiContext'

type TrackerListProps = {
  data: Tracker[]
}

export function TrackerList({ data }: TrackerListProps) {
  const dispatch = useDispatch()

  const handleSave = (tracker: Tracker) => {
    dispatch(createTracker(tracker))
  }

  const handleDelete = (id: string) => {
    const tracker = data.find(tracker => tracker.id === id)
    if (!tracker) return
    dispatch(deleteTracker(tracker))
  }

  return (
    <div>
      {data.map(tracker => {
        const isPositive = tracker.goal > tracker.balance

        const isWeekly = tracker.cadence === Cadence.WEEKLY
        const { balance, goal } = tracker
        const value = isPositive ? balance : goal
        const max = isPositive ? goal : balance
        console.log(isPositive, balance, goal, value, max)
        return (
          <Card className="rounded mb-6" key={tracker.id}>
            <CardHeader>
              <CardTitle>
                ${goal} / {isWeekly ? 'week' : 'month'}
              </CardTitle>
              <CardDescription>{tracker.label}</CardDescription>

              <div className="pt-2 w-full">
                <ProgressBar
                  progress={(value / max) * 100}
                  color={isPositive ? 'blue' : 'red'}
                />
                <p>
                  {isPositive ? (
                    <span className="text-sm flex">
                      <Check size={18} className="pt-1" />
                      On track
                    </span>
                  ) : (
                    <span className="text-sm flex">
                      <X size={18} className="pt-1" />
                      Target exceeded
                    </span>
                  )}
                </p>
                <p className="text-xs text-gray-500">{`Spent $${tracker.balance} of $${tracker.goal}`}</p>
              </div>
            </CardHeader>
            <CardFooter>
              <Button size={'icon'} onClick={() => handleDelete(tracker.id)}>
                <Trash className="h-4 w-4" />
              </Button>
              <EditTracker
                {...tracker}
                onEdit={tracker => dispatch(updateTracker(tracker))}
              />
            </CardFooter>
          </Card>
        )
      })}
      <AddTracker onSave={handleSave} />
    </div>
  )
}
