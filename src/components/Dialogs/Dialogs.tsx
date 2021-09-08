import React, { useMemo } from 'react'
import { Dialog } from './Dialog/Dialog'
import { Messages } from './Messages/Messages'
import s from './Dialogs.module.css'
import { DialogsType, DialogType } from '../../store/reducers/dialogs'
import { UserType } from '../../store/reducers/user'
import { AppDispatch } from '../../store'

type PropTypes = {
    dialogs: DialogsType
    user: UserType
    dispatch: AppDispatch
}

export const Dialogs: React.FC<PropTypes> = React.memo((
    {
        dialogs,
        user,
        dispatch,
    }) => {
    const { userDialogs, selectedMessages, selectedDialog, newMessageText } = dialogs

    const mappedDialogs = useMemo(() => userDialogs.map((dialog: DialogType) => (
        <Dialog
            dialog={ dialog }
            dispatch={ dispatch }
            key={ dialog.id }
        />
    )), [userDialogs, dispatch])

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
                        newMessageText={ newMessageText }
                        dispatch={ dispatch }
                        user={ user }
                    />
                    : 'Select dialog' }
            </div>
        </div>
    )
})