import React from 'react'
import { UserMessageTypes } from '../../../redux/state'
import { Message } from './Message/Message'
import { NewMessage } from './NewMessage/NewMessage'
import s from './Messages.module.css'


type PropTypes = {
    messages: Array<UserMessageTypes>
}

export const Messages:React.FC<PropTypes> = ({ messages }) => {
    const mappedMessages = messages.map((message:UserMessageTypes) => (
        <Message
            key={ message.id }
            message={ message }
        />
    ))

    return (
        <div className={ s.messagesContainer }>
            { mappedMessages }
            <NewMessage />
        </div>
    )
}