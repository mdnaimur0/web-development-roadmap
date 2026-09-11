import { useState, useEffect, useCallback, type ReactNode } from 'react'
import * as store from './progress-store'
import { STORAGE_BACKEND } from './storage'

if (typeof window !== 'undefined') {
  store.init()
}

interface ProgressContextValue {
  doneTopics: Set<string>
  isLoading: boolean
  error: Error | null
  usingFallback: boolean
  toggleTopic: (id: string) => Promise<void>
  isDone: (id: string) => boolean
  getPhaseProgress: (phaseId: string, totalTopics: number) => number
  overallProgress: number
  clearProgress: () => Promise<void>
}

export function useProgress(): ProgressContextValue {
  const [, forceUpdate] = useState(0)

  useEffect(() => {
    const unsubscribe = store.subscribe(() => forceUpdate(n => n + 1))
    forceUpdate(n => n + 1)
    return unsubscribe
  }, [])

  const state = store.getState()

  const toggleTopic = useCallback(async (id: string) => {
    await store.toggleTopic(id)
  }, [])

  const clearProgress = useCallback(async () => {
    await store.clearProgress()
  }, [])

  return {
    doneTopics: state.doneTopics,
    isLoading: state.isLoading,
    error: state.error,
    usingFallback: STORAGE_BACKEND === 'localstorage',
    toggleTopic,
    isDone: store.isDone,
    getPhaseProgress: store.getPhaseProgress,
    overallProgress: store.getOverallProgress(),
    clearProgress,
  }
}
