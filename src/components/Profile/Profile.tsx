import React from 'react'
import { UserInfo } from './UserInfo/UserInfo'
import { Posts } from './Posts/Posts'
import s from './Profile.module.css'
import { PostsType } from '../../store/reducers/posts'
import { UserType } from '../../store/reducers/user'

type PropTypes = {
    user: UserType
    posts: PostsType
    changeNewPostTextCallback: (newText: string) => void
    addNewPostCallback: () => void
}

export const Profile: React.FC<PropTypes> = React.memo((
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