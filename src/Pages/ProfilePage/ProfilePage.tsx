import React from 'react'
import { Profile } from '../../components/Profile/Profile'
import { PostsType } from '../../store/reducers/posts'
import { UserType } from '../../store/reducers/user'
import { RootState } from '../../store'
import * as actions from '../../store/actions/posts'
import { connect } from 'react-redux'

export type MapStatePropType = {
    user: UserType
    posts: PostsType
}

export type MapDispatchPropType = {
    changeNewPostTextCallback: (newText: string) => void
    addNewPostCallback: () => void
}

const mapStateToProps = (state: RootState): MapStatePropType => {
    return {
        user: state.user,
        posts: state.posts,
    }
}

const mapDispatchToProps = (dispatch: any): MapDispatchPropType => {
    return {
        changeNewPostTextCallback: (newText: string) => dispatch(actions.updateNewPostText(newText)),
        addNewPostCallback: () => dispatch(actions.addNewPost()),
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export const ProfilePage = React.memo(() => <ProfileContainer/>)
