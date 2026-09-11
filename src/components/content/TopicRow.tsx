import type { Topic } from '../../types/curriculum'
import { ResourceLink } from './ResourceLink'

interface TopicRowProps {
  topic: Topic
  done: boolean
  onToggle: (id: string) => void
}

export function TopicRow({ topic, done, onToggle }: TopicRowProps) {
  return (
    <div className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${done ? 'bg-owl-soft/20' : 'bg-canvas hover:bg-body-soft/5'}`}>
      <input
        type="checkbox"
        checked={done}
        onChange={() => onToggle(topic.id)}
        className="mt-1 w-5 h-5 cursor-pointer rounded focus:ring-2 focus:ring-owl focus:ring-offset-2"
        style={{ accentColor: '#58cc02' }}
        aria-label={`Mark "${topic.title}" as ${done ? 'incomplete' : 'complete'}`}
        id={`topic-${topic.id}`}
      />
      <label 
        htmlFor={`topic-${topic.id}`}
        className="sr-only"
      >
        {topic.title}
      </label>
      <div className="flex-1 min-w-0">
        <div className="font-bold text-navy text-body-md">{topic.title}</div>
        <div className="text-body-sm text-body-muted">{topic.banglaTitle}</div>
        <div className="mt-1">
          <ResourceLink resource={topic.resource} link={topic.link} type={topic.type} />
        </div>
      </div>
    </div>
  )
}
