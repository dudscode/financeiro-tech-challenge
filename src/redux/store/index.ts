import { combineReducers, configureStore } from '@reduxjs/toolkit'
import transactions from '@/redux/features/slices/transactions'
import saldo from '@/redux/features/slices/saldo'

const reducer = {
  transactions: transactions,
  saldo
}

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

const rootReducer = combineReducers({
  ...reducer
})

interface PreloadedState {
  [key: string]: any
}

export const setupStore = (preloadedState: PreloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export default store
