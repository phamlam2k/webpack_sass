import useStore from 'src/_libs/hooks/useStore'
import createStore from '../createStore'

interface State {
  count: number
}

const initialState: State = { count: 0 }

const store = createStore(initialState)

const increment = () => {
  store.setState((state) => ({ ...state, count: state.count + 1 }))
}

export const useCountStore = () => {
  return useStore(store, (state) => state.count)
}

export { store, increment }
