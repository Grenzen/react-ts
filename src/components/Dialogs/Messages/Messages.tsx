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
    addNewMessageToDialogCallback: (userId: string) => void
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

    const triggerAddNewMessage = () => addNewMessageToDialogCallback(user.id)

    return (
        <div className={ s.messagesContainer }>
            { mappedMessages }
            <NewMessage
                newMessageText={ newMessageText }
                changeNewMessageTextCallback={ changeNewMessageTextCallback }
                triggerAddNewMessage={ triggerAddNewMessage }
            />
        </div>
    )
})