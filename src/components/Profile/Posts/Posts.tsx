import React from 'react'
import { NewPost } from '../NewPost/NewPost'
import { PostItem } from '../PostItem/PostItem'
import { PostsTypes } from '../../../redux/state'

import s from './Posts.module.css'

type PropTypes = {
    avatar: string
    userPosts: PostsTypes
    addNewPost: () => void
}

export const Posts: React.FC<PropTypes> = (
    {
        avatar,
        userPosts,
        addNewPost,
    }) => {

    const { posts, newPostText } = userPosts
    const mappedPosts = posts.map((post) => (
        <PostItem
            avatarUrl={ avatar }
            text={ post.text }
            time={ post.time }
            likes={ post.likes }
            key={ post.id }
        />
    ))

    return (
        <div className={ s.postsContainer }>
            <h2 className={ s.title }>My Posts</h2>
            <NewPost newPostText={ newPostText } addNewPost={ addNewPost }/>
            { mappedPosts }
        </div>
    )
}