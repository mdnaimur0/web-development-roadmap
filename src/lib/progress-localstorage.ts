const PREFIX = 'web-dev-roadmap:topic:'

export function setTopicDone(id: string): void {
  localStorage.setItem(`${PREFIX}${id}`, 'true')
}

export function setTopicUndone(id: string): void {
  localStorage.removeItem(`${PREFIX}${id}`)
}

export function isTopicDone(id: string): boolean {
  return localStorage.getItem(`${PREFIX}${id}`) === 'true'
}

export function getAllDone(): Set<string> {
  const done = new Set<string>()
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key?.startsWith(PREFIX)) {
      done.add(key.replace(PREFIX, ''))
    }
  }
  return done
}

export function clearAll(): void {
  const keysToRemove: string[] = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key?.startsWith(PREFIX)) {
      keysToRemove.push(key)
    }
  }
  keysToRemove.forEach(k => localStorage.removeItem(k))
}
