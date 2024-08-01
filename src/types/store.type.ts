export type Listener = () => void

export interface Store<T> {
  getState: () => T
  setState: (newState: T | ((state: T) => T)) => void
  subscribe: (listener: Listener) => () => void
}

export type Middleware<T> = (
  store: Store<T>
) => (next: Store<T>['setState']) => Store<T>['setState']
