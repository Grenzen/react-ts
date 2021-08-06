import React from 'react'
import { Avatar } from '../../Avatar/Avatar'
import s from './PostItem.module.css'


type PropTypes = {
    avatarUrl: string
    title: string
    text: string
    likes: number
    time: Date
}

export const PostItem:React.FC<PropTypes> = ({avatarUrl, title, text, time, likes}) => {
    return (
        <section className={s.postItem}>
            <Avatar avatarUrl={avatarUrl} />
            <div className={s.container}>
                <h3 className={s.title}>{title}</h3>
                <article className={s.text}>{text}</article>
                <time
                    className={s.date}
                    dateTime={`${time}`}
                >
                    {`${time.getDate()}.${time.getMonth() + 1}.${time.getFullYear()} 
                        ${time.getHours()}:${time.getMinutes() > 9 
                            ? time.getMinutes() 
                            : `0${time.getMinutes()}`}
                    `}
                </time>
                <span className={s.reaction}>likes { likes }</span>
            </div>
        </section>
    )
}