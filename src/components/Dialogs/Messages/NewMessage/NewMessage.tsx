import React, {FormEvent, useRef} from 'react'
import s from './NewMessage.module.css'
import {FormButton} from "../../../FormButton/FormButton";

export const NewMessage = () => {
    const messageRef = useRef<HTMLTextAreaElement>(null)

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const date = new Date()
        console.log((messageRef.current as HTMLTextAreaElement).value)
        console.log(date)
    }

    return (
        <div className={ s.newMessageContainer }>
            <form
                className={ s.form }
                onSubmit={ submitHandler }
            >
                <textarea
                    ref={ messageRef }
                    className={ s.newMessageText }
                    rows={ 1 }
                    placeholder="Write message..."
                />
                <FormButton value="Send" position="stretch" primary={ true } size="medium" />
            </form>
        </div>
    )
}