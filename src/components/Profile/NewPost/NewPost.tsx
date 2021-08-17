import React, { FormEvent, ChangeEvent, KeyboardEvent } from 'react'
import { FormButton } from '../../FormButton/FormButton'
import { changeText } from '../../../redux/state'
import s from './NewPost.module.css'

type PropTypes = {
    newPostText: string
    addNewPost: () => void
}

export const NewPost:React.FC<PropTypes> = ({ newPostText, addNewPost }) => {

    const createNewPost = () => addNewPost()

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        createNewPost()
    }
    const onEnterPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            createNewPost()
        }
    }

    const changePostTextHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        changeText(event.currentTarget.value)
    }

    return (
        <form
            className={ s.newPostContainer }
            onSubmit={ submitHandler }
        >
            <textarea
                className={ s.text }
                rows={ 5 }
                value={ newPostText }
                placeholder="Write text..."
                onChange={ changePostTextHandler }
                onKeyPress={ onEnterPressHandler }
            />
            <FormButton
                value="Add post"
                position="end"
                primary={ true }
                size="medium"
            />
        </form>
    )
}