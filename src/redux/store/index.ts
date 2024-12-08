import { combineReducers, configureStore } from '@reduxjs/toolkit'
import transactions from '@/redux/features/slices/transactions'

const reducer = {
  transactions: transactions
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
