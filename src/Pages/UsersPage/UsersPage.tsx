import React from 'react'
import { connect } from 'react-redux'
import { Users } from '../../components/Users/Users'
import { RootStateType } from '../../store'
import { UsersStateType } from '../../store/reducers/users'
import * as actions from '../../store/actions/users'

export type MapStateToPropsType = UsersStateType

export type MapDispatchToPropsType = {
    fetchUsersCallback: () => void
    changeFollowCallback: (userId: number, followed: boolean) => void
    clearUsersCallback: () => void
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: state.users.users,
        isUsersLoading: state.users.isUsersLoading,
        isErrors: state.users.isErrors,
        actualPage: state.users.actualPage,
    }
}

const mapDispatchToProps = (dispatch: any): MapDispatchToPropsType => ({
    fetchUsersCallback: () => dispatch(actions.fetchUsers()),
    changeFollowCallback: (userId, followed) => dispatch(actions.changeFollow(userId, followed)),
    clearUsersCallback: () => dispatch(actions.clearUsers()),
})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export const UsersPage = React.memo(() => <UsersContainer/>)