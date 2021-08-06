import React  from 'react'
import { UserMessageTypes } from '../../../../redux/state'
import { Avatar } from '../../../Avatar/Avatar'
import s from './Message.module.css'



type PropTypes = {
    message: UserMessageTypes
}

export const Message: React.FC<PropTypes> = ({ message }) => {
    return (
        <div className={ s.itemContainer }>
            <Avatar avatarUrl={message.avatar} />
            <div className={ s.messageContainer }>
                <p className={ s.message }>{ message.message }</p>
                <span className={ s.time }>{ message.time }</span>
            </div>
        </div>
    )
}
