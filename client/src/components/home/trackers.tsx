'use client'
import { Skeleton } from '@/components/ui/skeleton'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import {
  fetchTrackers,
  selectLoading,
  selectTrackers,
} from '@/store/tracker/trackerSlice'
import { useEffect } from 'react'
import { TrackerList } from '../trackers/trackerList'

export function Trackers() {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(selectLoading)
  const trackers = useAppSelector(selectTrackers)

  const onFetchTrackers = async () => await dispatch(fetchTrackers())

  useEffect(() => {
    onFetchTrackers()
  }, [])

  return (
    <div>
      {isLoading ? (
        <>
          <Skeleton className="w-[100px] h-[20px] rounded-full" />
        </>
      ) : (
        <TrackerList data={trackers} />
      )}
    </div>
  )
}
