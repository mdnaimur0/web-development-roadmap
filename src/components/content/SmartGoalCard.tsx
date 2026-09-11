import { useState } from 'react'
import type { SmartGoal } from '../../types/curriculum'

interface SmartGoalCardProps {
  goal: SmartGoal
}

export function SmartGoalCard({ goal }: SmartGoalCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-owl-soft/30 rounded-lg p-4 border border-owl/20">
      <h4 className="text-navy font-bold mb-2">🎯 SMART Goal</h4>
      <p className="text-body text-body-strong mb-3">{goal.summary}</p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-macaw font-bold text-body-sm hover:underline"
      >
        {expanded ? '▲ Hide Details' : '▼ Show SMART Breakdown'}
      </button>

      {expanded && (
        <div className="mt-3 space-y-2 text-body-sm">
          {goal.specific && (
            <div><span className="font-bold text-navy">S – Specific:</span> {goal.specific}</div>
          )}
          {goal.measurable && (
            <div><span className="font-bold text-navy">M – Measurable:</span> {goal.measurable}</div>
          )}
          {goal.attainable && (
            <div><span className="font-bold text-navy">A – Attainable:</span> {goal.attainable}</div>
          )}
          {goal.realistic && (
            <div><span className="font-bold text-navy">R – Realistic:</span> {goal.realistic}</div>
          )}
          {goal.timeBound && (
            <div><span className="font-bold text-navy">T – Time-bound:</span> {goal.timeBound}</div>
          )}
        </div>
      )}
    </div>
  )
}
