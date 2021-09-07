import React from 'react'
import { Avatar } from '../../../Avatar/Avatar'
import s from './PostItem.module.css'


type PropTypes = {
    avatarUrl: string
    text: string
    likes: number
    time: Date
}

export const PostItem: React.FC<PropTypes> = React.memo((
    {
        avatarUrl,
        text,
        time,
        likes,
    }) => {

    const date = time.getDate()
    const month = time.getMonth() + 1 > 9 ? time.getMonth() + 1 : `0${ time.getMonth() + 1 }`
    const year = time.getFullYear()
    const hours = time.getHours()
    const minutes = time.getMinutes() > 9 ? time.getMinutes() : `0${ time.getMinutes() }`
    const humanDate = `${ date }.${ month }.${ year } ${ hours }:${ minutes }`

    return (
        <section className={ s.postItem }>
            <Avatar avatarUrl={ avatarUrl }/>
            <div className={ s.container }>
                <article className={ s.text }>{ text }</article>
                <time
                    className={ s.date }
                    dateTime={ `${ time }` }
                >
                    { humanDate }
                </time>
                <span className={ s.reaction }>likes { likes }</span>
            </div>
        </section>
    )
})