import React from 'react'
import { Profile } from '../../components/Profile/Profile'
import { ActionPostsType, PostsType } from '../../store/reducers/posts'
import { UserType } from '../../store/reducers/user'


type PropTypes = {
    user: UserType
    posts: PostsType
    dispatch: (action: ActionPostsType) => void
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