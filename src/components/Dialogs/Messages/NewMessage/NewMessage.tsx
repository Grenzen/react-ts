import React, { ChangeEvent, FormEvent } from 'react'
import s from './NewMessage.module.css'
import { FormButton } from '../../../FormButton/FormButton'

type NewMessageType = {
    newMessageText: string
    changeNewMessageTextCallback: (newText: string) => void
    triggerAddNewMessage: () => void
}

export const NewMessage: React.FC<NewMessageType> = React.memo((
    {
        newMessageText,
        changeNewMessageTextCallback,
        triggerAddNewMessage,
    }) => {

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        triggerAddNewMessage()
    }

    const onChangeMessageText = (event: ChangeEvent<HTMLTextAreaElement>) => {
        changeNewMessageTextCallback(event.currentTarget.value)
    }

    return (
        <div className={ s.newMessageContainer }>
            <form
                className={ s.form }
                onSubmit={ onSubmit }
            >
                <textarea
                    className={ s.newMessageText }
                    rows={ 1 }
                    value={ newMessageText }
                    placeholder="Tap-tap..."
                    onChange={ onChangeMessageText }
                />
                <FormButton value="Send" position="stretch" primary={ true } size="medium"/>
            </form>
        </div>
    )
})