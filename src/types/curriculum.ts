export interface Topic {
  id: string
  title: string
  banglaTitle: string
  resource: string
  link: string
  type: 'bangla' | 'english'
}

export interface SmartGoal {
  summary: string
  specific?: string
  measurable?: string
  attainable?: string
  realistic?: string
  timeBound?: string
}

export interface PhaseMeta {
  title: string
  banglaTitle: string
  classRange: string
  duration: string
  timeBudget: string
}

export interface Phase extends PhaseMeta {
  id: string
  order: number
  smartGoal: SmartGoal
  topics: Topic[]
  milestone: string
  banglaMilestone: string
  icon: string
  mascot: string
  mascotPose: string
  color: 'owl' | 'macaw' | 'cardinal' | 'fox' | 'bee' | 'beetle'
  maintenance?: boolean
}

export interface Curriculum {
  meta: {
    title: string
    banglaTitle: string
    subtitle: string
    description: string
    totalPhases: number
    targetAudience: string
  }
  phases: Phase[]
}
