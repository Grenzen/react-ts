import * as types from '../types/users'
import { UsersType } from '../reducers/users'

// Fetch Users for sagas
export const fetchUsers = () => ({
    type: types.FETCH_USERS,
} as const)

// Requested Users for reducer
export const requestedUsers = () => ({
    type: types.REQUESTED_USERS,
} as const)

export const requestedUsersSuccess = (users: UsersType[]) => ({
    type: types.REQUESTED_USERS_SUCCEEDED,
    payload: { users },
} as const)

export const requestedUsersError = () => ({
    type: types.REQUESTED_USERS_FAILED,
} as const)

// other actions
export const changeFollow = (userId: number, followed: boolean) => ({
    type: types.CHANGE_FOLLOW,
    payload: {
        userId,
        followed: !followed,
    },
} as const)

// Clear users
export const clearUsers = () => ({
    type: types.CLEAR_USERS,
} as const)