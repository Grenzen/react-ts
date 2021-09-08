import React, { ChangeEvent, FormEvent } from 'react'
import s from './NewMessage.module.css'
import { FormButton } from '../../../FormButton/FormButton'
import { addNewMessage, updateNewMessageText } from '../../../../store/actions/dialogs'
import { AppDispatch } from '../../../../store'

type NewMessageType = {
    newMessageText: string
    userId: string
    dispatch: AppDispatch
}

export const NewMessage: React.FC<NewMessageType> = React.memo((
    {
        newMessageText, dispatch, userId,
    }) => {

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(addNewMessage(userId))
        // console.log((messageRef.current as HTMLTextAreaElement).value)
    }

    const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageText(event.currentTarget.value))
    }

    return (
        <div className={ s.newMessageContainer }>
            <form
                className={ s.form }
                onSubmit={ submitHandler }
            >
                <textarea
                    className={ s.newMessageText }
                    rows={ 1 }
                    value={ newMessageText }
                    placeholder="Write message..."
                    onChange={ changeHandler }
                />
                <FormButton value="Send" position="stretch" primary={ true } size="medium"/>
            </form>
        </div>
    )
})