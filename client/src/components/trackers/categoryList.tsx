import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { Label } from '../ui/label'
import { categories } from '../../../../server/mockData'

export function CategoryList({
  initialCategory,
  onCategoryChange,
}: {
  initialCategory: string
  onCategoryChange: (category: string) => void
}) {
  return (
    <div className="grid grid-cols-3 items-center gap-4">
      <Label htmlFor="category">Category</Label>
      <Select onValueChange={option => onCategoryChange(option)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={initialCategory} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {categories.map(category => {
              return (
                <SelectItem key={category.id} value={category.name}>
                  {category.name}
                </SelectItem>
              )
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default CategoryList
