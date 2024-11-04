import React from 'react'

interface ProgressBarProps {
  progress: number
  color: 'blue' | 'red'
}

const colorVariants = {
  blue: 'bg-indigo-400 h-full rounded-l',
  red: 'bg-red-400 h-full rounded-l',
}

const bgVariants = {
  blue: 'rounded flex w-full h-6 bg-slate-200',
  red: 'rounded flex w-full h-6 bg-red-500',
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color }) => {
  return (
    <div className={`${bgVariants[color]}`}>
      <div
        className={`${colorVariants[color]} ...`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}

export default ProgressBar
