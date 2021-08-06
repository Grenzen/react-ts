import React from 'react'
import { FriendTypes } from '../../../redux/state'
import { Avatar } from '../../Avatar/Avatar'
import s from './FriendItem.module.css'

type PropTypes = {
    friend: FriendTypes
}

export const FriendItem:React.FC<PropTypes> = ({ friend }) => {
   const { name, avatar } = friend
    return (
        <div className={s.friendContainer}>
            <span className={s.friendName}>{ name }</span>
            <Avatar avatarUrl={ avatar } />
        </div>
    )
}