import { useState } from 'react'

interface MascotDisplayProps {
  src: string
  alt: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'w-24 h-24',
  md: 'w-48 h-48',
  lg: 'w-64 h-64'
}

export function MascotDisplay({ src, alt, size = 'md' }: MascotDisplayProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className={`${sizeClasses[size]} bg-body-soft/10 rounded-full flex items-center justify-center`}>
        <img 
          src="/mascots/placeholder.svg" 
          alt={alt}
          className="w-full h-full"
        />
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${sizeClasses[size]} mx-auto`}
      onError={() => setHasError(true)}
    />
  )
}
