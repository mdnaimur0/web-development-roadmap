import { STORAGE_BACKEND } from './storage'
import * as idb from './progress-db'
import * as ls from './progress-localstorage'

const storage = STORAGE_BACKEND === 'indexeddb' ? idb : ls

export async function setTopicDone(id: string): Promise<void> {
  return storage.setTopicDone(id)
}

export async function setTopicUndone(id: string): Promise<void> {
  return storage.setTopicUndone(id)
}

export async function isTopicDone(id: string): Promise<boolean> {
  return storage.isTopicDone(id)
}

export async function getAllDone(): Promise<Set<string>> {
  return storage.getAllDone()
}

export async function clearAll(): Promise<void> {
  return storage.clearAll()
}
