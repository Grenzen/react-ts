import React from 'react'
import { UserMessageTypes } from '../../../../redux/state'
import { Avatar } from '../../../Avatar/Avatar'
import s from './Message.module.css'


type PropTypes = {
    message: UserMessageTypes
    friendAvatar: string | undefined
}

export const Message: React.FC<PropTypes> = ({ message, friendAvatar }) => {

    return (
        <div className={ s.itemContainer }>
            <Avatar avatarUrl={ friendAvatar } size="small" shape="round"/>
            <div className={ s.messageContainer }>
                <p className={ s.message }>{ message.message }</p>
                <span className={ s.time }>{ message.time }</span>
            </div>
        </div>
    )
}
