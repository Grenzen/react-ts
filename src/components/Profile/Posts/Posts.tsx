import React, { useMemo } from 'react'
import { NewPost } from './NewPost/NewPost'
import { PostItem } from './PostItem/PostItem'
import s from './Posts.module.css'
import { PostsType } from '../../../store/reducers/posts'
import { MapDispatchPropType } from '../../../Pages/ProfilePage/ProfilePage'

type PostsPropType = {
    avatar: string
    userPosts: PostsType
} & MapDispatchPropType

export const Posts: React.FC<PostsPropType> = React.memo((
    {
        avatar, userPosts,
        changeNewPostTextCallback, addNewPostCallback,
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
                addNewPostCallback={ addNewPostCallback }
                changeNewPostTextCallback={ changeNewPostTextCallback }
            />
            { mappedPosts }
        </div>
    )
})