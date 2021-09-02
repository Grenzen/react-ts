import React from 'react'
import { ActionType, DialogsTypes, DialogTypes } from '../../redux/state'
import { Dialog } from './Dialog/Dialog'
import { Messages } from './Messages/Messages'
import s from './Dialogs.module.css'

type PropTypes = {
    dialogs: DialogsTypes
    dispatch: (action: ActionType) => void
}

export const Dialogs: React.FC<PropTypes> = (
    {
        dialogs, dispatch,
    }) => {
    const { userDialogs, selectedMessages, selectedDialog } = dialogs

    const mappedDialogs = userDialogs.map((dialog: DialogTypes) => (
        <Dialog
            dialog={ dialog }
            dispatch={ dispatch }
            key={ dialog.id }
        />
    ))

    return (
        <div className={ s.container }>
            <div className={ s.dialogs }>
                <ul className={ s.list }>
                    { mappedDialogs }
                </ul>
            </div>
            <div className={ s.messages }>
                { selectedMessages
                    ? <Messages
                        messages={ selectedMessages.messages }
                        friendAvatar={ selectedDialog ? selectedDialog.avatar : undefined }
                    />
                    : 'Select dialog' }
            </div>
        </div>
    )
}