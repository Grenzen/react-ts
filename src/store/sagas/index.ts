import { all } from 'redux-saga/effects'
import watchUsers from './usersSagas'

export default function* watchSagas() {
    yield all([watchUsers()])
}