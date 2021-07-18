import React from 'react'
import { NewPost } from '../NewPost/NewPost'
import { PostItem } from '../PostItem/PostItem'
import s from './Posts.module.css'


const posts = [
    {
        id: 0,
        title: 'Тег даты и времени',
        text: 'В новой записи вы решили уточнить точное время дня (а точнее ночи), когда именно была сделана запись. Строку со временем можно оставить просто текстом, но есть вариант получше. В HTML есть специальный тег для разметки даты и времени',
        time: new Date(`2021-07-18T15:07:55.582Z`)
    },
    {
        id: 1,
        title: 'Статическая типизация',
        text: 'Инструменты для статической типизации, такие как Flow или TypeScript, позволяют отлавливать большую часть ошибок ещё до исполнения кода. Кроме того, они существенно улучшают процессы разработки, добавляя автодополнение и другие возможности. Для приложений с большой кодовой базой мы рекомендуем использовать Flow или TypeScript вместо PropTypes.',
        time: new Date(`2021-07-18T18:07:13.943Z`),
    },
    {
        id: 2,
        title: 'Flow',
        text: 'Flow — это библиотека для статической типизации JavaScript, разработанная в Facebook и часто применяемая в связке с React. Flow расширяет возможности JavaScript, добавляя аннотации типов для переменных, функций и React-компонентов.',
        time: new Date(`2021-07-18T18:38:10.515Z`)
    }]

type PostsPropTypes = {
    avatar: string
}

export const Posts = (props: PostsPropTypes) => {
    const { avatar } = props
    return(
        <div className={s.postsContainer}>
            <h2 className={s.title}>My Posts</h2>
            <NewPost />
            {
                posts.map((post) => {
                    return <PostItem
                                avatarUrl={avatar}
                                title={post.title}
                                text={post.text}
                                time={post.time}
                                key={post.id}
                    />
                })
            }

        </div>
    )
}