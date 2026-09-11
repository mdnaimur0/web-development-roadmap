export type StorageBackend = 'indexeddb' | 'localstorage'

export function detectStorage(): StorageBackend {
  if (typeof window === 'undefined') return 'localstorage'
  if (!window.indexedDB) return 'localstorage'
  
  return 'indexeddb'
}

export const STORAGE_BACKEND = detectStorage()
