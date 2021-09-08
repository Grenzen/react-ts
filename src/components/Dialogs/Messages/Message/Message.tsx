import React from 'react'
import { Avatar } from '../../../Avatar/Avatar'
import s from './Message.module.css'
import { UserMessageType } from '../../../../store/reducers/dialogs'


type PropTypes = {
    userMode: boolean
    name: string
    message: UserMessageType
    avatar: string | undefined
}

export const Message: React.FC<PropTypes> = React.memo((
    {
        userMode,
        name,
        message,
        avatar,
    }) => {
    const itemContainerMode = userMode ? `${ s.userItemContainer }` : `${ s.friendItemContainer }`
    const humanTime = `
        ${ message.time.getHours() }:${ message.time.getMinutes() < 10
        ? `0${ message.time.getMinutes() }`
        : message.time.getMinutes() }
    `

    return (
        <div className={ [s.itemContainer, itemContainerMode].join(' ') }>
            <Avatar avatarUrl={ avatar } size="small" shape="round"/>
            <div className={ s.messageContainer }>
                <div>
                    <p className={ s.userName }>{ name }</p>
                    <p className={ s.message }>{ message.message }</p>
                </div>
                <span className={ s.time }>{ humanTime }</span>
            </div>
        </div>
    )
})
