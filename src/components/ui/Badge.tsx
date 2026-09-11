interface BadgeProps {
  variant: 'streak' | 'gold' | 'error' | 'success' | 'info'
  label: string
}

const variantClasses = {
  streak: 'bg-fox/10 text-fox',
  gold: 'bg-bee/10 text-bee',
  error: 'bg-cardinal/10 text-cardinal',
  success: 'bg-owl/10 text-owl',
  info: 'bg-macaw/10 text-macaw'
}

export function Badge({ variant, label }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-pill text-body-sm font-bold ${variantClasses[variant]}`}>
      {label}
    </span>
  )
}
