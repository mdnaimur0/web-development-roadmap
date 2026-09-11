import type { Phase } from '../../types/curriculum'
import { ProgressBar } from '../ui/ProgressBar'
import { useProgress } from '../../lib/progress-context'

interface PhaseCardProps {
  phase: Phase
}

const colorMap = {
  owl: 'border-l-owl',
  macaw: 'border-l-macaw',
  cardinal: 'border-l-cardinal',
  fox: 'border-l-fox',
  bee: 'border-l-bee',
  beetle: 'border-l-beetle'
}

export function PhaseCard({ phase }: PhaseCardProps) {
  const { getPhaseProgress } = useProgress()
  const progress = getPhaseProgress(phase.id, phase.topics.length)
  
  return (
    <a
      href={`/phase/${phase.id}`}
      className={`block bg-canvas rounded-lg border-l-4 ${colorMap[phase.color]} shadow-card p-5 hover:shadow-lg transition-shadow`}
      aria-label={`View ${phase.title} phase - ${progress}% complete`}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-3xl">{phase.icon}</span>
        {phase.maintenance && (
          <span className="bg-fox/10 text-fox text-body-sm font-bold px-2 py-0.5 rounded-pill">
            MAINTENANCE
          </span>
        )}
      </div>
      <h3 className="text-navy font-bold text-heading-sm mb-1">{phase.title}</h3>
      <p className="text-body-sm text-body-muted mb-3">{phase.banglaTitle}</p>
      <div className="text-body-sm text-body-muted mb-2">
        {phase.classRange} · {phase.duration}
      </div>
      {!phase.maintenance && phase.topics.length > 0 && (
        <ProgressBar value={progress} size="sm" label={`${phase.title} progress`} />
      )}
      {!phase.maintenance && phase.topics.length > 0 && (
        <div className="text-body-sm text-body-muted mt-1">{progress}% complete</div>
      )}
    </a>
  )
}
