import { createStore } from 'redux'
import rootReducers from './reducers'
import { useDispatch } from 'react-redux'

export const store = createStore(rootReducers)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()