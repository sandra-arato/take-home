import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Tracker, Cadence, TrackerType } from '../../../../server/types'
import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import CategoryList from './categoryList'

type AddTrackerProps = {
  onSave: (tracker: Tracker) => void
}

export function AddTracker({ onSave }: AddTrackerProps) {
  const [label, setLabel] = useState('')
  const [goal, setGoal] = useState(0)
  const [cadence, setCadence] = useState<Cadence>(Cadence.WEEKLY)
  const [category, setCategory] = useState<string>('')

  // You could argue that this ID could be a uuid, or coming from the server?
  const getNextId = () => Math.random().toString(36).substring(7)
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">New tracker</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Add new tracker</h4>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="label">Label</Label>
              <Input
                id="label"
                className="col-span-2 h-8"
                value={label}
                onChange={e => setLabel(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="goal">Target</Label>
              <Input
                id="goal"
                className="col-span-2 h-8"
                type="number"
                value={goal}
                onChange={e => setGoal(Number(e.target.value))}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="cadence">Cadence</Label>
              {/* Typecasting is not something I usually do - want to save on time here */}
              <Select onValueChange={option => setCadence(option as Cadence)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value={Cadence.WEEKLY}>Weekly</SelectItem>
                    <SelectItem value={Cadence.MONTHLY}>Monthly</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <CategoryList
              initialCategory={category}
              onCategoryChange={setCategory}
            />
            <Button
              onClick={() =>
                onSave({
                  label,
                  cadence,
                  goal,
                  balance: 0,
                  type: TrackerType.SPENDING,
                  id: getNextId(),
                  category,
                })
              }
            >
              Save
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
