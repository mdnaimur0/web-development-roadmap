import { getAllDone, setTopicDone, setTopicUndone, clearAll } from './progress-storage'
import { curriculum } from '../data/curriculum'

type Listener = () => void

let doneTopics = new Set<string>()
let isLoading = true
let error: Error | null = null
let listeners = new Set<Listener>()
let initialized = false

export function subscribe(listener: Listener): () => void {
  listeners.add(listener)
  return () => { listeners.delete(listener) }
}

export function getState() {
  return { doneTopics, isLoading, error }
}

export async function init(): Promise<void> {
  if (initialized) return
  initialized = true
  try {
    const allDone = await getAllDone()
    doneTopics = allDone
  } catch (err) {
    error = err instanceof Error ? err : new Error('Failed to load progress')
  } finally {
    isLoading = false
    listeners.forEach(l => l())
  }
}

export async function toggleTopic(id: string): Promise<void> {
  try {
    const isCurrentlyDone = doneTopics.has(id)
    if (isCurrentlyDone) {
      await setTopicUndone(id)
      const next = new Set(doneTopics)
      next.delete(id)
      doneTopics = next
    } else {
      await setTopicDone(id)
      const next = new Set(doneTopics)
      next.add(id)
      doneTopics = next
    }
    listeners.forEach(l => l())
  } catch (err) {
    error = err instanceof Error ? err : new Error('Failed to save progress')
    listeners.forEach(l => l())
  }
}

export function isDone(id: string): boolean {
  return doneTopics.has(id)
}

export function getPhaseProgress(phaseId: string, totalTopics: number): number {
  if (totalTopics === 0) return 0
  let done = 0
  doneTopics.forEach(id => {
    if (id.startsWith(phaseId)) done++
  })
  return Math.round((done / totalTopics) * 100)
}

export function getOverallProgress(): number {
  const totalTopics = curriculum.phases.reduce(
    (sum, phase) => sum + phase.topics.length,
    0
  )
  if (totalTopics === 0) return 0
  return Math.round((doneTopics.size / totalTopics) * 100)
}

export async function clearProgress(): Promise<void> {
  try {
    await clearAll()
    doneTopics = new Set()
    listeners.forEach(l => l())
  } catch (err) {
    error = err instanceof Error ? err : new Error('Failed to clear progress')
    listeners.forEach(l => l())
  }
}
