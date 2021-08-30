import * as types from '../types/posts'

export const updateNewPostText = (newText: string) => ({
    type: types.UPDATE_NEW_POST_TEXT,
    newText,
} as const)

export const addNewPost = () => ({
    type: types.ADD_NEW_POST,
} as const)