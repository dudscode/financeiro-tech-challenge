import { combineReducers, configureStore } from '@reduxjs/toolkit'
import transactions from '@/redux/features/slices/transactions'
import saldos from '@/redux/features/slices/saldos'
import user from '@/redux/features/slices/user'

const reducer = {
  transactions: transactions,
  saldos,
  user
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
