import * as types from '../types/dialogs'
import * as dialogsActions from '../actions/dialogs'
import clone from 'clone-deep'
import { DialogsTypes } from '../../redux/state'

export type SelectDialogType = ReturnType<typeof dialogsActions.selectDialog>
export type UpdateNewMessageTextType = ReturnType<typeof dialogsActions.updateNewMessageText>
export type AddNewMessageType = ReturnType<typeof dialogsActions.addNewMessage>

export type ActionDialogsType = SelectDialogType | UpdateNewMessageTextType | AddNewMessageType

export const dialogsReducer = (state: DialogsTypes, action: ActionDialogsType): DialogsTypes => {
    switch (action.type) {
        case types.SELECT_DIALOG: // выбрать диалог
            state.selectedMessages = state.userMessages[ action.id ]
            state.selectedDialog = clone(state.userDialogs
                .find(item => item.id === action.id)) || null
            return state
        case types.UPDATE_NEW_MESSAGE_TEXT: //изменить текст сообщения
            state.newMessageText = action.newText
            return state
        case types.ADD_NEW_MESSAGE: //добавить новое сообщение
            const selectDialogId = state.selectedDialog?.id
            if (selectDialogId) {
                const newMessage = {
                    id: action.id,
                    message: state.newMessageText,
                    time: new Date(),
                }
                const messagesClone = clone(state.userMessages[ selectDialogId ])
                state.userMessages[ selectDialogId ] = [...messagesClone, newMessage]
                state.selectedMessages = state.userMessages[ selectDialogId ]
                state.newMessageText = ''
            }
            return state
        default:
            return state
    }
}