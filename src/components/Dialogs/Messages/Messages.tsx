import React from 'react'
import { UserMessageTypes } from '../../../redux/state'
import { Message } from './Message/Message'
import { NewMessage } from './NewMessage/NewMessage'
import s from './Messages.module.css'


type PropTypes = {
    messages: Array<UserMessageTypes>
    friendAvatar: string | undefined
}

export const Messages: React.FC<PropTypes> = (
    {
        messages,
        friendAvatar,
    }) => {
    const mappedMessages = messages.map((message: UserMessageTypes) => (
        <Message
            key={ message.id }
            message={ message }
            friendAvatar={ friendAvatar }
        />
    ))

    return (
        <div className={ s.messagesContainer }>
            { mappedMessages }
            <NewMessage/>
        </div>
    )
}