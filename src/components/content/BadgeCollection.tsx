import { useProgress } from '../../lib/progress-context'
import { curriculum } from '../../data/curriculum'

interface Badge {
  id: string
  phaseId: string
  name: string
  banglaName: string
  icon: string
  unlocked: boolean
}

const badgeIcons: Record<string, string> = {
  'phase-0': '🧠',
  'phase-1': '🌐',
  'phase-2': '⚡',
  'phase-3': '🔧',
  'phase-4': '🚀',
  'phase-5': '⚙️',
  'phase-6': '🏗️',
  'phase-7': '🎓',
}

export function BadgeCollection() {
  const { getPhaseProgress } = useProgress()
  
  const badges: Badge[] = curriculum.phases.map(phase => ({
    id: `badge-${phase.id}`,
    phaseId: phase.id,
    name: `${phase.title} Master`,
    banglaName: `${phase.banglaTitle} মাস্টার`,
    icon: badgeIcons[phase.id] || phase.icon,
    unlocked: getPhaseProgress(phase.id, phase.topics.length) === 100
  }))

  const unlockedCount = badges.filter(b => b.unlocked).length

  return (
    <div className="bg-canvas rounded-lg shadow-card p-6">
      <h3 className="text-navy font-bold text-heading-sm mb-4">
        Badges ({unlockedCount}/{badges.length})
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
        {badges.map(badge => (
          <div
            key={badge.id}
            className={`flex flex-col items-center p-3 rounded-lg transition-all ${
              badge.unlocked 
                ? 'bg-bee/10 border-2 border-bee' 
                : 'bg-body-soft/10 opacity-50'
            }`}
            title={badge.unlocked ? badge.name : 'Locked'}
          >
            <span className={`text-3xl ${badge.unlocked ? '' : 'grayscale'}`}>
              {badge.icon}
            </span>
            <span className="text-body-sm text-center mt-1 truncate w-full">
              {badge.unlocked ? '✓' : '🔒'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
