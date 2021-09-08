import React, { useMemo } from 'react'
import { NewPost } from './NewPost/NewPost'
import { PostItem } from './PostItem/PostItem'
import s from './Posts.module.css'
import { PostsType } from '../../../store/reducers/posts'


type PropTypes = {
    avatar: string
    userPosts: PostsType
    changeNewPostTextCallback: (newText: string) => void
    addNewPostCallback: () => void
}

export const Posts: React.FC<PropTypes> = React.memo((
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