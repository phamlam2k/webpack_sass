import { IStateCounters } from '@store/counters/counters.type'
import create from '../createStore'
import { actions } from '@store/counters/counters.action'

const initialState: IStateCounters = { count: 0 }

const useCounterStore = create(initialState, actions)

export default useCounterStore
