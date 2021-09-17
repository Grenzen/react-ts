import * as types from '../types/users'
import * as actions from '../actions/users'

type UserLocation = {
    country: string
    city: string
}

export type UsersType = {
    userId: number
    userAvatar: string | null
    userFullName: string
    userStatus: string | null
    userLocation: UserLocation | null
    followed: boolean
}

export type UsersStateType = {
    users: UsersType[] | []
    isUsersLoading: boolean
    isErrors: boolean
    actualPage: number
}
const initialState: UsersStateType = {
    users: [],
    isUsersLoading: false,
    isErrors: false,
    actualPage: 1,
}

export type RequestedUsersType = ReturnType<typeof actions.requestedUsers>
export type RequestedUsersSuccessType = ReturnType<typeof actions.requestedUsersSuccess>
export type RequestedUsersError = ReturnType<typeof actions.requestedUsersError>

export type ChangeFollowType = ReturnType<typeof actions.changeFollow>

export type ClearUsersType = ReturnType<typeof actions.clearUsers>

export type ActionUsersType =
    RequestedUsersType | RequestedUsersSuccessType | RequestedUsersError |
    ChangeFollowType | ClearUsersType


export const usersReducer = (state: UsersStateType = initialState, action: ActionUsersType): UsersStateType => {
    switch (action.type) {
        case types.REQUESTED_USERS:
            return {
                ...state,
                isUsersLoading: true,
            }
        case types.REQUESTED_USERS_SUCCEEDED:
            return {
                ...state,
                users: [...state.users, ...action.payload.users],
                isUsersLoading: false,
                actualPage: state.actualPage + 1,
            }
        case types.REQUESTED_USERS_FAILED:
            return {
                ...state,
                isUsersLoading: false,
                isErrors: true,
            }
        case types.CHANGE_FOLLOW:
            return {
                ...state,
                users: state.users && state.users.map(user => user.userId === action.payload.userId ? {
                    ...user,
                    followed: action.payload.followed,
                } : user),
            }
        case types.CLEAR_USERS:
            return {
                ...state,
                users: [],
                actualPage: 1,
            }
        default:
            return state
    }
}