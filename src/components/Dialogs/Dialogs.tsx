import React, { useState } from 'react'
import { DialogTypes, UserMessageTypes, UsersMessagesTypes } from '../../redux/state'
import { Dialog } from './Dialog/Dialog'
import { Messages } from './Messages/Messages'
import s from './Dialogs.module.css'

type PropTypes = {
    userDialogs: Array<DialogTypes>
    userMessages: UsersMessagesTypes
}

const selectMessages = (id: string, userMessages: UsersMessagesTypes): Array<UserMessageTypes> | null => {
    const { messages } = userMessages[`${id}`]
    return messages && messages.length ? messages : null
}

export const Dialogs:React.FC<PropTypes> = ({ userDialogs, userMessages }) => {
    const [messages, setMessages] = useState<Array<UserMessageTypes> | null>(null)
    const selectDialogCallback = (id: string) => setMessages(() => selectMessages(id, userMessages))

    const mappedDialogs = userDialogs.map((dialog: DialogTypes) => (
        <Dialog
            dialog={ dialog }
            selectDialogCallback={ selectDialogCallback }
            key={ dialog.id }
        />
    ))

    return (
        <div className={s.container}>
            <div className={s.dialogs}>
                <ul className={s.list}>
                    { mappedDialogs }
                </ul>
            </div>
            <div className={ s.messages }>
                { messages ? <Messages messages={ messages }/> : 'Select dialog' }
            </div>
        </div>
    )
}