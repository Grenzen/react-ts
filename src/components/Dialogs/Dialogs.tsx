import React from 'react'
import { ActionType, DialogsTypes, DialogTypes, UserTypes } from '../../redux/state'
import { Dialog } from './Dialog/Dialog'
import { Messages } from './Messages/Messages'
import s from './Dialogs.module.css'

type PropTypes = {
    dialogs: DialogsTypes
    user: UserTypes
    dispatch: (action: ActionType) => void
}

export const Dialogs: React.FC<PropTypes> = (
    {
        dialogs,
        user,
        dispatch,
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
                { selectedDialog && selectedMessages
                    ? <Messages
                        messages={ selectedMessages }
                        friend={ selectedDialog }
                        user={ user }
                    />
                    : 'Select dialog' }
            </div>
        </div>
    )
}