import React from 'react'
import { UserInfo } from './UserInfo/UserInfo'
import { ActionType, PostsTypes, UserTypes } from '../../redux/state'
import { Posts } from './Posts/Posts'
import s from './Profile.module.css'


type PropTypes = {
    user: UserTypes
    posts: PostsTypes
    dispatch: (action: ActionType) => void
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