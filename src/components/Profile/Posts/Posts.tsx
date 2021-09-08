import React, { useMemo } from 'react'
import { NewPost } from './NewPost/NewPost'
import { PostItem } from './PostItem/PostItem'
import s from './Posts.module.css'
import { ActionPostsType, PostsType } from '../../../store/reducers/posts'


type PropTypes = {
    avatar: string
    userPosts: PostsType
    dispatch: (action: ActionPostsType) => void
}

export const Posts: React.FC<PropTypes> = React.memo((
    {
        avatar, userPosts,
        dispatch,
    }) => {

    const { posts, newPostText } = userPosts
    const mappedPosts = useMemo(() => posts.map((post) => {
        return <PostItem
            avatarUrl={ avatar }
            text={ post.text }
            time={ post.time }
            likes={ post.likes }
            key={ post.id }
        />
    }), [posts, avatar])

    return (
        <div className={ s.postsContainer }>
            <h2 className={ s.title }>My Posts</h2>
            <NewPost
                newPostText={ newPostText }
                dispatch={ dispatch }
            />
            { mappedPosts }
        </div>
    )
})