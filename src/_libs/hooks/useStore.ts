// useStore.ts
import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/shim/with-selector'

type Selector<T, U> = (state: T) => U
type EqualityFn<U> = (a: U, b: U) => boolean

function useStore<T, U>(
  store: { getState: () => T; subscribe: (listener: () => void) => () => void },
  selector: Selector<T, U>,
  equalityFn: EqualityFn<U> = Object.is
) {
  return useSyncExternalStoreWithSelector(
    store.subscribe,
    store.getState,
    store.getState, // Dùng cho SSR
    selector,
    equalityFn
  )
}

export default useStore
