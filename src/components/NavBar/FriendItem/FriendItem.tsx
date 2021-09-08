import React from 'react'
import { Avatar } from '../../Avatar/Avatar'
import s from './FriendItem.module.css'
import { FriendType } from '../../../store/reducers/friends'

type PropTypes = {
    friend: FriendType
}

export const FriendItem: React.FC<PropTypes> = React.memo(({ friend }) => {
    const { name, avatar } = friend
    return (
        <div className={ s.friendContainer }>
            <span className={ s.friendName }>{ name }</span>
            <Avatar avatarUrl={ avatar } shape="round" size="medium"/>
        </div>
    )
})