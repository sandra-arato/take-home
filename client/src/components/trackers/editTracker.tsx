import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Pencil } from 'lucide-react'
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

interface EditTrackerProps extends Tracker {
  onEdit: (tracker: Tracker) => void
}

export function EditTracker({
  onEdit,
  label: initialLabel,
  goal: initialGoal,
  cadence: initialCadence,
  category: initialCategory,
  id,
}: EditTrackerProps) {
  const [label, setLabel] = useState(initialLabel)
  const [goal, setGoal] = useState(initialGoal)
  const [cadence, setCadence] = useState<Cadence>(initialCadence)
  const [category, setCategory] = useState<string>(initialCategory || '')

  return (
    <Popover>
      <PopoverTrigger asChild className="mx-2">
        <Button variant={'outline'} size="icon">
          <Pencil />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Edit tracker</h4>
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
                  <SelectValue placeholder={cadence} />
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
                onEdit({
                  label,
                  cadence,
                  goal,
                  balance: 0,
                  type: TrackerType.SPENDING,
                  id,
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
