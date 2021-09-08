import React from 'react'
import { UserInfo } from './UserInfo/UserInfo'
import { Posts } from './Posts/Posts'
import s from './Profile.module.css'
import { MapDispatchPropType, MapStatePropType } from '../../Pages/ProfilePage/ProfilePage'

type ProfilePropType = MapDispatchPropType & MapStatePropType

export const Profile: React.FC<ProfilePropType> = React.memo((
    {
        user, posts,
        changeNewPostTextCallback, addNewPostCallback,
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
                addNewPostCallback={ addNewPostCallback }
                changeNewPostTextCallback={ changeNewPostTextCallback }
            />
        </main>
    )
})