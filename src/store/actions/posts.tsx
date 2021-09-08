import * as types from '../types/posts'
import { v1 } from 'uuid'

export const updateNewPostText = (newText: string) => ({
    type: types.UPDATE_NEW_POST_TEXT,
    newText,
} as const)

export const addNewPost = () => ({
    type: types.ADD_NEW_POST,
    postId: v1(),
    postTime: new Date(),
} as const)