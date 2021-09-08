import * as types from '../types/dialogs'
import * as dialogsActions from '../actions/dialogs'

export type DialogType = {
    id: string
    name: string
    avatar: string
}

export type UserMessageType = {
    id: string
    message: string
    time: Date
}

export type UsersMessagesType = {
    [ key: string ]: Array<UserMessageType>
}

export type DialogsType = {
    selectedDialog: DialogType | null
    selectedMessages: Array<UserMessageType> | null
    newMessageText: string
    userDialogs: Array<DialogType>
    userMessages: UsersMessagesType
}

export type SelectDialogType = ReturnType<typeof dialogsActions.selectDialog>
export type UpdateNewMessageTextType = ReturnType<typeof dialogsActions.updateNewMessageText>
export type AddNewMessageType = ReturnType<typeof dialogsActions.addNewMessage>
export type ActionDialogsType = SelectDialogType | UpdateNewMessageTextType | AddNewMessageType

const initialState: DialogsType = {
    selectedDialog: null,
    selectedMessages: null,
    newMessageText: '',
    userDialogs: [
        {
            id: '0',
            name: 'John',
            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        },
        {
            id: '1',
            name: 'Sara',
            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        },
        {
            id: '2',
            name: 'George',
            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        },
        {
            id: '3',
            name: 'Jinny',
            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        },
        {
            id: '4',
            name: 'Harry',
            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        },
    ],
    userMessages: {
        '0': [
            {
                id: '0',
                message: 'Hi',
                time: new Date(`2021-07-18T18:07:13.943Z`),
            },
            {
                id: 'cscs',
                message: 'How are you?',
                time: new Date(`2021-07-18T18:07:13.943Z`),
            },
            {
                id: '0',
                message: 'What are you doing now?',
                time: new Date(`2021-07-18T18:07:13.943Z`),
            },
        ],
        '1': [
            {
                id: '1',
                message: 'Hello',
                time: new Date(`2021-07-18T18:07:13.943Z`),
            },
            {
                id: 'cscs',
                message: 'Do you wanna go for walks?',
                time: new Date(`2021-07-18T18:07:13.943Z`),
            },
            {
                id: '1',
                message: 'Let\'s meet at five',
                time: new Date(`2021-07-18T18:07:13.943Z`),
            },
        ],
        '2': [
            {
                id: '2',
                message: 'Yo',
                time: new Date(`2021-07-18T18:07:13.943Z`),
            },
            {
                id: 'cscs',
                message: 'Are you sleeping?',
                time: new Date(`2021-07-18T18:07:13.943Z`),
            },
            {
                id: '2',
                message: 'Watch this crazy stuff',
                time: new Date(`2021-07-18T18:07:13.943Z`),
            },
        ],
        '3': [
            {
                id: '3',
                message: 'Oh man',
                time: new Date(`2021-07-18T18:07:13.943Z`),
            },
            {
                id: 'cscs',
                message: 'You so mad',
                time: new Date(`2021-07-18T18:07:13.943Z`),
            },
            {
                id: '3',
                message: 'Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.',
                time: new Date(`2021-07-18T18:07:13.943Z`),
            },
        ],
        '4': [
            {
                id: '4',
                message: 'See you later',
                time: new Date(`2021-07-18T18:07:13.943Z`),
            },
            {
                id: 'cscs',
                message: 'Don\'t forget about our business',
                time: new Date(`2021-07-18T18:07:13.943Z`),
            },
            {
                id: '4',
                message: 'I call you later',
                time: new Date(`2021-07-18T18:07:13.943Z`),
            },
        ],
    },
}

export const dialogsReducer = (state: DialogsType = initialState, action: ActionDialogsType): DialogsType => {
    switch (action.type) {
        case types.SELECT_DIALOG: // выбрать диалог
            return {
                ...state,
                selectedMessages: state.userMessages[ action.id ],
                selectedDialog: state.userDialogs.find(item => item.id === action.id) || null,
            }
        case types.UPDATE_NEW_MESSAGE_TEXT: //изменить текст сообщения
            return {
                ...state,
                newMessageText: action.newText,
            }
        case types.ADD_NEW_MESSAGE: //добавить новое сообщение
            const selectDialogId = state.selectedDialog?.id
            if (selectDialogId) {
                const newMessage = {
                    id: action.id,
                    message: state.newMessageText,
                    time: new Date(),
                }
                const newMessages = [...state.userMessages[ selectDialogId ], newMessage]
                return {
                    ...state,
                    userMessages: {
                        ...state.userMessages,
                        [ selectDialogId ]: newMessages,
                    },
                    selectedMessages: newMessages,
                    newMessageText: '',
                }
            }
            return state
        default:
            return state
    }
}