import React from 'react'
import { Profile } from '../../components/Profile/Profile'
import { PostsType } from '../../store/reducers/posts'
import { UserType } from '../../store/reducers/user'
import { AppDispatch } from '../../store'


type PropTypes = {
    user: UserType
    posts: PostsType
    dispatch: AppDispatch
}

export const ProfilePage: React.FC<PropTypes> = React.memo((
    {
        user, posts, dispatch,
    }) => {
    return (
        <>
            <Profile
                user={ user }
                posts={ posts }
                dispatch={ dispatch }
            />
        </>
    )
})