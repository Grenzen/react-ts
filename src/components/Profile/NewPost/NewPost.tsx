import React from 'react'
import s from './NewPost.module.css'

export const NewPost = () => {
    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(e)
    }
    return (
        <form
            className={s.container}
            onSubmit={handleSubmit}
        >
            <input
                className={s.title}
                type="text"
                placeholder="Write title..."
            />
            <textarea
                className={s.text}
                rows={5}
                placeholder="Write text..."
            />
            <input
                className={s.button}
                type="submit"
                value="Add post"/>
        </form>
    )
}