import React, { useMemo } from 'react'
import { DialogTypes, UserMessageTypes, UserTypes } from '../../../redux/state'
import { Message } from './Message/Message'
import { NewMessage } from './NewMessage/NewMessage'
import s from './Messages.module.css'
import { ActionDialogsType } from '../../../store/reducers/dialogs'


type PropTypes = {
    messages: Array<UserMessageTypes>
    friend: DialogTypes
    newMessageText: string
    user: UserTypes
    dispatch: (action: ActionDialogsType) => void
}

export const Messages: React.FC<PropTypes> = React.memo((
    {
        messages,
        friend,
        newMessageText,
        user, dispatch,
    }) => {
    const mappedMessages = useMemo(() => messages.map((message: UserMessageTypes, id) => {
        const name = message.id === user.id ? user.firstName : friend.name
        const avatar = message.id === user.id ? user.avatar : friend.avatar
        const userMode = message.id === user.id
        return < Message
            key={ id }
            userMode={ userMode }
            name={ name }
            message={ message }
            avatar={ avatar }
        />
    }), [messages, user, friend])

    return (
        <div className={ s.messagesContainer }>
            { mappedMessages }
            <NewMessage
                newMessageText={ newMessageText }
                userId={ user.id }
                dispatch={ dispatch }
            />
        </div>
    )
})