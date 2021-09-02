import React from 'react'
import { UserMessageTypes } from '../../../../redux/state'
import { Avatar } from '../../../Avatar/Avatar'
import s from './Message.module.css'


type PropTypes = {
    userMode: boolean
    name: string
    message: UserMessageTypes
    avatar: string | undefined
}

export const Message: React.FC<PropTypes> = (
    {
        userMode,
        name,
        message,
        avatar,
    }) => {
    const itemContainerMode = userMode ? `${ s.userItemContainer }` : `${ s.friendItemContainer }`

    return (
        <div className={ [s.itemContainer, itemContainerMode].join(' ') }>
            <Avatar avatarUrl={ avatar } size="small" shape="round"/>
            <div className={ s.messageContainer }>
                <div>
                    <p className={ s.userName }>{ name }</p>
                    <p className={ s.message }>{ message.message }</p>
                </div>
                <span className={ s.time }>{ message.time }</span>
            </div>
        </div>
    )
}
