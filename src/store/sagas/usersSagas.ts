import { call, put, takeEvery } from 'redux-saga/effects'
import * as types from '../types/users'
import * as actions from '../actions/users'
import * as usersService from '../../services/users'
import { UsersType } from '../reducers/users'
import store from '../../store'

export function* fetchUsers() {
    try {
        yield put(actions.requestedUsers())
        const page = store.getState().users.actualPage
        const users: UsersType[] = yield call(usersService.getUsers, `${ page }`)
        yield put(actions.requestedUsersSuccess(users))
    } catch (error) {
        yield put(actions.requestedUsersError())
    }
}

export default function* watchUsers() {
    yield takeEvery(types.FETCH_USERS, fetchUsers)
}