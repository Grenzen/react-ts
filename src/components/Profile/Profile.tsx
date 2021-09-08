import React from 'react'
import { UserInfo } from './UserInfo/UserInfo'
import { Posts } from './Posts/Posts'
import s from './Profile.module.css'
import { ActionPostsType, PostsType } from '../../store/reducers/posts'
import { UserType } from '../../store/reducers/user'


type PropTypes = {
    user: UserType
    posts: PostsType
    dispatch: (action: ActionPostsType) => void
}

export const Profile: React.FC<PropTypes> = React.memo((
    {
        user,
        posts,
        dispatch,
    }) => {
    return (
        <main className={ s.profile }>
            <div
                className={ s.image }
                style={ { backgroundImage: `url(${ user.background })` } }
            ></div>
            <UserInfo user={ user }/>
            <Posts
                avatar={ user.avatar }
                userPosts={ posts }
                dispatch={ dispatch }
            />
        </main>
    )
})