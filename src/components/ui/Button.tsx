import type { ReactNode } from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  href?: string
  children: ReactNode
  className?: string
  ariaLabel?: string
}

export function Button({ variant = 'primary', onClick, href, children, className = '', ariaLabel }: ButtonProps) {
  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary'
  const classes = `${baseClass} inline-flex items-center justify-center ${className}`

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
