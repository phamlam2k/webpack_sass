export type IStateCountersProps = IStateCounters & IStateActions

export interface IStateCounters {
  count: number
  text: string
}

export interface IStateActions {
  increment: (value: number) => void
  decrement: () => void
  changeText: (text: string) => void
  reset: () => void
}

export type SetState<T> = (newState: T | ((state: T) => T)) => void
