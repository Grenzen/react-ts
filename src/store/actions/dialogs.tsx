import * as types from '../types/dialogs'

export const selectDialog = (id: string) => ({
    type: types.SELECT_DIALOG,
    id,
} as const)

export const updateNewMessageText = (newText: string) => ({
    type: types.UPDATE_NEW_MESSAGE_TEXT,
    newText,
} as const)

export const addNewMessage = (id: string) => ({
    type: types.ADD_NEW_MESSAGE,
    id,
} as const)