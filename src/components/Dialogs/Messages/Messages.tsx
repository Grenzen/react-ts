import React from 'react'
import { DialogTypes, UserMessageTypes, UserTypes } from '../../../redux/state'
import { Message } from './Message/Message'
import { NewMessage } from './NewMessage/NewMessage'
import s from './Messages.module.css'


type PropTypes = {
    messages: Array<UserMessageTypes>
    friend: DialogTypes
    user: UserTypes
}

export const Messages: React.FC<PropTypes> = (
    {
        messages,
        friend,
        user,
    }) => {
    const mappedMessages = messages.map((message: UserMessageTypes, id) => {
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
    })

    return (
        <div className={ s.messagesContainer }>
            { mappedMessages }
            <NewMessage/>
        </div>
    )
}