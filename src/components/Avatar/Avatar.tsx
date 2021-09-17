import React from 'react'
import s from './Avatar.module.css'

interface AvatarProps {
    avatarUrl?: string | null
    size?: 'small' | 'medium' | 'large'
    shape?: 'square' | 'round'
}

const getRandomColour = () => {
    let rand = 0 - 0.5 + Math.random() * (255 - 0 + 1)
    return Math.round(rand)
}

export const Avatar: React.FC<AvatarProps> = React.memo((
    {
        avatarUrl,
        size = 'medium',
        shape = 'round',
    },
) => {
    const background = avatarUrl ?
        { backgroundImage: `url(${ avatarUrl })` } :
        { backgroundColor: `rgb(${ getRandomColour() }, ${ getRandomColour() }, ${ getRandomColour() })` }

    return (
        <div
            className={ [s.avatar, s[ `${ size }` ], s[ `${ shape }` ]].join(' ') }
            style={ background }
        ></div>
    )
})