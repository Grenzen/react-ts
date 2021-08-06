import React from 'react'
import s from './Avatar.module.css'

type PropTypes = {
    avatarUrl: string
}
export const Avatar:React.FC<PropTypes> = ({ avatarUrl }) => {
    return (
        <div className={s.image} style={{backgroundImage: `url(${avatarUrl})`}}></div>
    )
}