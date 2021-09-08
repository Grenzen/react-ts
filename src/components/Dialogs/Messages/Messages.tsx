import React, { useMemo } from 'react'
import { Message } from './Message/Message'
import { NewMessage } from './NewMessage/NewMessage'
import s from './Messages.module.css'
import { DialogType, UserMessageType } from '../../../store/reducers/dialogs'
import { UserType } from '../../../store/reducers/user'

type PropTypes = {
    messages: Array<UserMessageType>
    friend: DialogType
    newMessageText: string
    user: UserType
    changeNewMessageTextCallback: (newText: string) => void
    addNewMessageToDialogCallback: () => void
}

export const Messages: React.FC<PropTypes> = React.memo((
    {
        messages, friend, newMessageText,
        user,
        changeNewMessageTextCallback, addNewMessageToDialogCallback,
    }) => {
    const mappedMessages = useMemo(() => messages.map((message: UserMessageType, id) => {
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
                changeNewMessageTextCallback={ changeNewMessageTextCallback }
                addNewMessageToDialogCallback={ addNewMessageToDialogCallback }
            />
        </div>
    )
})