import React from 'react'
import { NewPost } from '../NewPost/NewPost'
import { PostItem } from '../PostItem/PostItem'
import { PostsTypes } from '../../../redux/state'

import s from './Posts.module.css'

type PropTypes = {
    avatar: string
    userPosts: PostsTypes
}

export const Posts:React.FC<PropTypes> = ({ avatar, userPosts }) => {
    const { posts } = userPosts
    return(
        <div className={s.postsContainer}>
            <h2 className={s.title}>My Posts</h2>
            <NewPost />
            {
                posts.map((post) => {
                    return <PostItem
                                avatarUrl={ avatar }
                                title={ post.title }
                                text={ post.text }
                                time={ post.time }
                                likes={ post.likes }
                                key={post.id}
                    />
                })
            }

        </div>
    )
}