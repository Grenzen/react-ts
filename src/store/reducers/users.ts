import { v1 } from 'uuid'
import * as types from '../types/users'
import * as actions from '../actions/users'

const initialState: UsersType[] = [
    {
        userId: v1(),
        userAvatar: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/A7E9/production/_118158924_gettyimages-507245091.jpg',
        userFullName: 'Joan One',
        userStatus: 'Hi there',
        userLocation: {
            country: 'Belarus',
            city: 'Minsk',
        },
        followed: true,
    },
    {
        userId: v1(),
        userAvatar: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/A7E9/production/_118158924_gettyimages-507245091.jpg',
        userFullName: 'Joan Two',
        userStatus: 'Hi there',
        userLocation: {
            country: 'Russia',
            city: 'Moscow',
        },
        followed: false,
    },
    {
        userId: v1(),
        userAvatar: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/A7E9/production/_118158924_gettyimages-507245091.jpg',
        userFullName: 'Joan Three',
        userStatus: 'Hi there',
        userLocation: {
            country: 'Poland',
            city: 'Warshaw',
        },
        followed: true,
    },
    {
        userId: v1(),
        userAvatar: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/A7E9/production/_118158924_gettyimages-507245091.jpg',
        userFullName: 'Joan Four',
        userStatus: 'Hi',
        userLocation: {
            country: 'Poland',
            city: 'Warshaw',
        },
        followed: false,
    },
]

export type UsersType = {
    userId: string
    userAvatar: string
    userFullName: string
    userStatus: string
    userLocation: { country: string, city: string }
    followed: boolean
}

export type ChangeFollowType = ReturnType<typeof actions.changeFollow>
export type SetUsersType = ReturnType<typeof actions.setUsers>
export type ActionUsersType = ChangeFollowType | SetUsersType

export const usersReducer = (state: UsersType[] = initialState, action: ActionUsersType): UsersType[] => {
    switch (action.type) {
        case types.CHANGE_FOLLOW:
            return state
                .map(user => user.userId === action.payload.userId ? {
                    ...user,
                    followed: action.payload.followed,
                } : user)
        case types.SET_USERS:
            return [...state, ...action.payload.users]
        default:
            return state
    }
}