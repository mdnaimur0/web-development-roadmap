export const MASCOT_CONFIG = {
  pandi: {
    name: 'Pandi',
    description: 'Foundation guide (Red Panda)',
    defaultPose: 'whiteboard',
    phases: ['phase-0', 'phase-1', 'phase-2']
  },
  otter: {
    name: 'Otter',
    description: 'Intermediate guide',
    defaultPose: 'light-work',
    phases: ['phase-3', 'phase-4']
  },
  piglet: {
    name: 'Piglet',
    description: 'Advanced guide',
    defaultPose: 'celebrating',
    phases: ['phase-5', 'phase-6', 'phase-7']
  }
} as const

export function getMascotPath(mascot: string, pose: string): string {
  return `/mascots/${mascot}-${pose}.svg`
}
