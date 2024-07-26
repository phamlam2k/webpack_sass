import {
  IStateActions,
  IStateCounters,
  SetState
} from '@store/counters/counters.type'

export const actions = (
  set: SetState<IStateCounters>
): Partial<IStateActions> => ({
  increment: (value: number) =>
    set((state) => ({ ...state, count: state.count + value })),
  decrement: () => set((state) => ({ ...state, count: state.count - 1 })),
  reset: () => set((state) => ({ ...state, count: 0 })),
  changeText: (text: string) => set((state) => ({ ...state, text }))
})
