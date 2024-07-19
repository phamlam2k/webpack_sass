// createStore.ts
type Listener = () => void

interface Store<T> {
  getState: () => T
  setState: (newState: T | ((state: T) => T)) => void
  subscribe: (listener: Listener) => () => void
}

function createStore<T>(initialState: T): Store<T> {
  let state: T = initialState
  const listeners: Set<Listener> = new Set()

  const getState = () => state

  const setState = (newState: T | ((state: T) => T)) => {
    state =
      typeof newState === 'function'
        ? (newState as (state: T) => T)(state)
        : newState
    listeners.forEach((listener) => listener())
  }

  const subscribe = (listener: Listener) => {
    listeners.add(listener)
    return () => listeners.delete(listener)
  }

  return { getState, setState, subscribe }
}

export default createStore
