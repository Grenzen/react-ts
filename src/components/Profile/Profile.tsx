import React from 'react'
import { UserInfo } from './UserInfo/UserInfo'
import { PostsTypes, UserTypes } from '../../redux/state'
import { Posts } from './Posts/Posts'
import s from './Profile.module.css'


type PropTypes = {
    user: UserTypes
    posts: PostsTypes
    addNewPost: () => void
}

export const Profile: React.FC<PropTypes> = (
    {
        user,
        posts,
        addNewPost,
    }) => {
    return (
        <main className={ s.profile }>
            <div
                className={ s.image }
                style={ { backgroundImage: `url(${ user.background })` } }
            ></div>
            <UserInfo user={ user }/>
            <Posts avatar={ user.avatar } userPosts={ posts } addNewPost={ addNewPost }/>
        </main>
    )
}