import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/shim/with-selector'

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

function create<T, U>(
  initialState: T,
  actions: (set: (newState: T | ((state: T) => T)) => void) => Partial<U>
) {
  const store = createStore<T>(initialState)

  const combinedState = {
    ...initialState,
    ...actions(store.setState)
  }

  store.setState(combinedState)

  return (selector: (state: T) => U, equalityFn?: (a: U, b: U) => boolean) =>
    useSyncExternalStoreWithSelector(
      store.subscribe,
      store.getState,
      store.getState,
      selector,
      equalityFn
    )
}

export default create
