import React from 'react'
import { connect } from 'react-redux'
import { Users } from '../components/Users/Users'
import { RootState } from '../store'
import { UsersType } from '../store/reducers/users'
import * as actions from '../store/actions/users'

export type MapStateToPropsType = {
    users: UsersType[]
}

export type MapDispatchToPropsType = {
    changeFollowCallback: (userId: string, followed: boolean) => void
    setUsersCallback: (users: UsersType[]) => void
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        users: state.users,
    }
}

const mapDispatchToProps = (dispatch: any): MapDispatchToPropsType => ({
    changeFollowCallback: (userId: string, followed: boolean) => dispatch(actions.changeFollow(userId, followed)),
    setUsersCallback: (users: UsersType[]) => dispatch(actions.setUsers(users)),
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export const UsersPage = React.memo(() => <UsersContainer/>)