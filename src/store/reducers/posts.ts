import * as types from '../types/posts'
import * as postsActions from '../actions/posts'
import clone from 'clone-deep'
import { v1 } from 'uuid'
import { PostsTypes } from '../../redux/state'

export type UpdateNewPostTextType = ReturnType<typeof postsActions.updateNewPostText>
export type AddNewPostType = ReturnType<typeof postsActions.addNewPost>
export type ActionPostsType = AddNewPostType | UpdateNewPostTextType

export const postsReducer = (state: PostsTypes, action: ActionPostsType): PostsTypes => {
    switch (action.type) {
        case types.ADD_NEW_POST: // добавить новый пост на страницу профиля
            const postsClone = clone(state.posts)
            const newPost = {
                id: v1(),
                text: state.newPostText,
                time: new Date(),
                likes: 0,
            }
            state.posts = [newPost, ...postsClone]
            state.newPostText = ''
            return state
        case types.UPDATE_NEW_POST_TEXT: // изменить текст поста на странице профиля
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}