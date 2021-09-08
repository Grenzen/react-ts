import React, { FormEvent, ChangeEvent, KeyboardEvent } from 'react'
import { FormButton } from '../../../FormButton/FormButton'
import s from './NewPost.module.css'
import * as actions from '../../../../store/actions/posts'
import { ActionPostsType } from '../../../../store/reducers/posts'


type PropTypes = {
    newPostText: string
    dispatch: (action: ActionPostsType) => void
}

export const NewPost: React.FC<PropTypes> = React.memo((
    {
        newPostText, dispatch,
    }) => {

    const createNewPost = () => {
        dispatch(actions.addNewPost())
    }

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
        dispatch(actions.updateNewPostText(event.currentTarget.value))
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
})