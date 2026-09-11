import { Badge } from '../ui/Badge'

interface ResourceLinkProps {
  resource: string
  link: string
  type: 'bangla' | 'english'
}

export function ResourceLink({ resource, link, type }: ResourceLinkProps) {
  return (
    <div className="flex items-center gap-2">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-macaw hover:underline font-bold"
      >
        {resource}
      </a>
      <Badge variant={type === 'bangla' ? 'success' : 'info'} label={type === 'bangla' ? 'বাংলা' : 'EN'} />
    </div>
  )
}
