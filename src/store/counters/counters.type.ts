export type IStateCountersProps = IStateCounters & IStateActions

export interface IStateCounters {
  count: number
}

export interface IStateActions {
  increment: (value: number) => void
  decrement: () => void
  reset: () => void
}

export type SetState<T> = (newState: T | ((state: T) => T)) => void
