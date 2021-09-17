import { compose, applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducers from './reducers'
import watchSagas from './sagas'
import { useDispatch } from 'react-redux'

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatchType>()

const saga = createSagaMiddleware()

// redux dev tool
const enhancer = compose(applyMiddleware(saga))
export const store = createStore(rootReducers, enhancer)

saga.run(watchSagas)

export default store