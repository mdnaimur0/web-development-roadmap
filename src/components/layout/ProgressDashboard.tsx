import { useState } from 'react'
import { useProgress } from '../../lib/progress-context'
import { curriculum } from '../../data/curriculum'
import { ProgressBar } from '../ui/ProgressBar'
import { LoadingSpinner } from '../ui/LoadingSpinner'
import { ErrorBoundary } from '../feedback/ErrorBoundary'
import { BadgeCollection } from '../content/BadgeCollection'

export function ProgressDashboard() {
  return (
    <ErrorBoundary>
      <DashboardContent />
    </ErrorBoundary>
  )
}

function DashboardContent() {
  const { doneTopics, isLoading, overallProgress, getPhaseProgress, clearProgress } = useProgress()
  const [showResetModal, setShowResetModal] = useState(false)

  if (isLoading) {
    return <LoadingSpinner size="lg" />
  }

  if (doneTopics.size === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🚀</div>
        <h2 className="text-heading-md text-navy mb-2">Start Your Journey!</h2>
        <p className="text-body text-body-muted mb-6">
          Complete your first topic to see your progress here.
        </p>
        <a href="/" className="btn-primary">
          EXPLORE PHASES
        </a>
      </div>
    )
  }

  return (
    <div>
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">📊</div>
        <h2 className="text-heading-md text-navy mb-2">Overall Progress</h2>
        <div className="w-48 h-48 mx-auto mb-4">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e5e5" strokeWidth="8" />
            <circle
              cx="50" cy="50" r="45" fill="none" stroke="#58cc02" strokeWidth="8"
              strokeDasharray={`${overallProgress * 2.83} 283`}
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="text-display-lg text-navy font-bold">
          {overallProgress}%
          <span className="sr-only" aria-live="polite" aria-atomic="true">
            Overall progress: {overallProgress}% complete
          </span>
        </div>
        <div className="text-body text-body-muted">{doneTopics.size} topics completed</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {curriculum.phases.map(phase => {
          const phaseProgress = getPhaseProgress(phase.id, phase.topics.length)
          return (
            <div key={phase.id} className="bg-canvas rounded-lg shadow-card p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{phase.icon}</span>
                <h3 className="text-navy font-bold text-body-md">{phase.title}</h3>
              </div>
              <ProgressBar value={phaseProgress} size="sm" label={`${phase.title} progress`} />
              <div className="text-body-sm text-body-muted mt-1">{phaseProgress}%</div>
            </div>
          )
        })}
      </div>

      <BadgeCollection />

      <div className="text-center mt-8">
        <button
          onClick={() => setShowResetModal(true)}
          className="btn-secondary text-cardinal border-cardinal hover:bg-cardinal/5"
        >
          RESET PROGRESS
        </button>
      </div>

      {showResetModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-canvas rounded-lg p-6 max-w-md w-full shadow-xl">
            <h3 className="text-heading-md text-navy mb-2">Reset Progress?</h3>
            <p className="text-body text-body-muted mb-6">
              This will permanently delete all your progress. This action cannot be undone.
            </p>
            <div className="flex gap-3 justify-end">
              <button 
                onClick={() => setShowResetModal(false)}
                className="btn-secondary"
              >
                CANCEL
              </button>
              <button 
                onClick={() => {
                  clearProgress()
                  setShowResetModal(false)
                }}
                className="btn-primary bg-cardinal hover:bg-cardinal/90"
              >
                RESET
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
