import React from 'react'
import s from './PostItem.module.css'

type PostItemPropTypes = {
    avatarUrl: string,
    title: string,
    text: string,
    time: Date
}

export const PostItem = (props: PostItemPropTypes) => {
    const { avatarUrl, title, text, time } = props

    return (
        <section className={s.postItem}>
            <div className={s.image} style={{backgroundImage: `url(${avatarUrl})`}}></div>
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
            </div>
        </section>
    )
}