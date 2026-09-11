interface ProgressBarProps {
  value: number
  size?: 'sm' | 'md' | 'lg'
  label?: string
}

const sizeClasses = {
  sm: 'h-2',
  md: 'h-3',
  lg: 'h-4'
}

export function ProgressBar({ value, size = 'md', label }: ProgressBarProps) {
  const clampedValue = Math.min(100, Math.max(0, value))

  return (
    <div 
      className={`w-full bg-body-soft/30 rounded-pill overflow-hidden ${sizeClasses[size]}`}
      role="progressbar"
      aria-valuenow={clampedValue}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label || `${clampedValue}% complete`}
    >
      <div
        className="h-full bg-owl rounded-pill transition-all duration-500 ease-out"
        style={{ width: `${clampedValue}%` }}
      />
    </div>
  )
}
