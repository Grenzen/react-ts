import * as types from '../types/users'
import { UsersType } from '../reducers/users'

export const changeFollow = (userId: string, followed: boolean) => ({
    type: types.CHANGE_FOLLOW,
    payload: {
        userId,
        followed: !followed,
    },
} as const)

export const setUsers = (users: UsersType[]) => ({
    type: types.SET_USERS,
    payload: {
        users,
    },
} as const)