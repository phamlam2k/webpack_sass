import { Middleware } from '@type/store.type'

export const localStorageMiddleware = <T>(key: string): Middleware<T> => {
  return (store) => {
    return (next) => (action) => {
      const result = next(action)
      const state = store.getState()
      try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem(key, serializedState)
      } catch (e) {
        console.warn('Could not save state to localStorage', e)
      }
      return result
    }
  }
}

export const loadStateFromLocalStorage = <T>(
  key: string,
  defaultState: T
): T => {
  try {
    const serializedState = localStorage.getItem(key)
    if (serializedState === null) {
      return defaultState
    }
    return JSON.parse(serializedState) as T
  } catch (e) {
    console.warn('Could not load state from localStorage', e)
    return defaultState
  }
}
