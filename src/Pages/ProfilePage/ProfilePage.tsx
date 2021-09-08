import React from 'react'
import { Profile } from '../../components/Profile/Profile'
import { PostsType } from '../../store/reducers/posts'
import { UserType } from '../../store/reducers/user'
import { AppDispatch } from '../../store'
import * as actions from '../../store/actions/posts'


type PropTypes = {
    user: UserType
    posts: PostsType
    dispatch: AppDispatch
}

export const ProfilePage: React.FC<PropTypes> = React.memo((
    {
        user, posts, dispatch,
    }) => {
    const changeNewPostTextCallback = (newText: string) => {
        dispatch(actions.updateNewPostText(newText))
    }
    const addNewPostCallback = () => {
        dispatch(actions.addNewPost())
    }
    return (
        <>
            <Profile
                user={ user }
                posts={ posts }
                changeNewPostTextCallback={ changeNewPostTextCallback }
                addNewPostCallback={ addNewPostCallback }
            />
        </>
    )
})