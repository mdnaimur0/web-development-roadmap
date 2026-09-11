import { openDB } from 'idb'

let dbPromise: ReturnType<typeof openDB> | null = null

function getDB() {
  if (!dbPromise) {
    dbPromise = openDB('web-dev-roadmap', 1, {
      upgrade(db) {
        db.createObjectStore('progress')
      }
    })
  }
  return dbPromise
}

export async function setTopicDone(id: string): Promise<void> {
  const db = await getDB()
  await db.put('progress', true, `topic:${id}`)
}

export async function setTopicUndone(id: string): Promise<void> {
  const db = await getDB()
  await db.delete('progress', `topic:${id}`)
}

export async function isTopicDone(id: string): Promise<boolean> {
  const db = await getDB()
  return (await db.get('progress', `topic:${id}`)) ?? false
}

export async function getAllDone(): Promise<Set<string>> {
  const db = await getDB()
  const keys = await db.getAllKeys('progress')
  return new Set(
    keys
      .filter(k => k.startsWith('topic:'))
      .map(k => k.replace('topic:', ''))
  )
}

export async function clearAll(): Promise<void> {
  const db = await getDB()
  await db.clear('progress')
}
