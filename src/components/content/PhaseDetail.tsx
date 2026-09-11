import { useState } from 'react'
import type { Phase } from '../../types/curriculum'
import { useProgress } from '../../lib/progress-context'
import { TopicRow } from './TopicRow'
import { SmartGoalCard } from './SmartGoalCard'
import { ProgressBar } from '../ui/ProgressBar'
import { MascotDisplay } from './MascotDisplay'
import { getMascotPath } from '../../constants/mascots'

interface PhaseDetailProps {
  phase: Phase
  prevPhaseId?: string
  nextPhaseId?: string
}

export function PhaseDetail({ phase, prevPhaseId, nextPhaseId }: PhaseDetailProps) {
  const { isDone, toggleTopic, getPhaseProgress, isLoading } = useProgress()
  const progress = getPhaseProgress(phase.id, phase.topics.length)

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-5xl">{phase.icon}</span>
        <div>
          <h1 className="text-display-lg text-navy">{phase.title}</h1>
          <p className="text-body-lg text-body-muted">{phase.banglaTitle}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-6 text-body-sm text-body-muted">
        <span className="bg-body-soft/10 px-3 py-1 rounded-pill">{phase.classRange}</span>
        <span className="bg-body-soft/10 px-3 py-1 rounded-pill">{phase.duration}</span>
        <span className="bg-body-soft/10 px-3 py-1 rounded-pill">{phase.timeBudget}</span>
      </div>

      {phase.maintenance ? (
        <div className="bg-fox/10 border border-fox/30 rounded-lg p-6 text-center mb-6">
          <MascotDisplay
            src={getMascotPath(phase.mascot, phase.mascotPose)}
            alt={`${phase.mascot} mascot`}
            size="md"
          />
          <div className="text-4xl mb-3">🦊</div>
          <h3 className="text-heading-md text-navy mb-2">Maintenance Mode</h3>
          <p className="text-body text-body-muted mb-3">
            This is exam year. No new heavy topics — just keep your skills alive with light practice.
          </p>
          <p className="text-body-sm text-body-muted mb-4">{phase.banglaMilestone}</p>
          <div className="bg-canvas rounded-md p-4 text-left">
            <h4 className="font-bold text-navy mb-2">Tips for this phase:</h4>
            <ul className="text-body-sm text-body-muted space-y-1">
              <li>• Review one old project per month</li>
              <li>• Fix one small bug or add one feature</li>
              <li>• Keep your GitHub active with small commits</li>
              <li>• Focus on your exams — you've got this!</li>
            </ul>
          </div>
        </div>
      ) : (
        <>
          <SmartGoalCard goal={phase.smartGoal} />

          <div className="my-6">
            <h3 className="text-navy font-bold text-heading-sm mb-3">Topics ({phase.topics.length})</h3>
            {isLoading ? (
              <div className="h-3 bg-body-soft/20 rounded-pill animate-pulse" />
            ) : (
              <>
                <ProgressBar value={progress} size="md" label="Topic completion progress" />
                <div className="text-body-sm text-body-muted mt-1 mb-4">
                  {progress}% complete
                  <span className="sr-only" aria-live="polite" aria-atomic="true">
                    Phase progress: {progress}% complete, {phase.topics.length - Math.round(progress * phase.topics.length / 100)} topics remaining
                  </span>
                </div>
              </>
            )}
            <div className="space-y-2">
              {phase.topics.map(topic => (
                <TopicRow
                  key={topic.id}
                  topic={topic}
                  done={isDone(topic.id)}
                  onToggle={toggleTopic}
                />
              ))}
            </div>
          </div>
        </>
      )}

      <div className="bg-owl-soft/30 border border-owl/20 rounded-lg p-4 mt-6">
        <h4 className="text-navy font-bold mb-1">🏆 Milestone</h4>
        <p className="text-body text-body-strong">{phase.milestone}</p>
        <p className="text-body-sm text-body-muted mt-1">{phase.banglaMilestone}</p>
      </div>

      <MascotDisplay
        src={getMascotPath(phase.mascot, phase.mascotPose)}
        alt={`${phase.mascot} mascot`}
        size="lg"
      />

      <div className="flex justify-between mt-8">
        {prevPhaseId ? (
          <a href={`/phase/${prevPhaseId}`} className="btn-secondary">
            ← PREVIOUS PHASE
          </a>
        ) : <div />}
        {nextPhaseId ? (
          <a href={`/phase/${nextPhaseId}`} className="btn-primary">
            NEXT PHASE →
          </a>
        ) : <div />}
      </div>
    </div>
  )
}
