import React, { useMemo } from 'react'
import { Dialog } from './Dialog/Dialog'
import { Messages } from './Messages/Messages'
import s from './Dialogs.module.css'
import { DialogType } from '../../store/reducers/dialogs'
import { MapDispatchPropType, MapStatePropType } from '../../Pages/DialogsPage/DialogsPage'

type PropTypes = MapStatePropType & MapDispatchPropType

export const Dialogs: React.FC<PropTypes> = React.memo((
    {
        dialogs, user,
        selectDialogCallback, changeNewMessageTextCallback,
        addNewMessageToDialogCallback,
    }) => {
    const { userDialogs, selectedMessages, selectedDialog, newMessageText } = dialogs

    const mappedDialogs = useMemo(() => userDialogs.map((dialog: DialogType) => (
        <Dialog
            dialog={ dialog }
            selectDialogCallback={ selectDialogCallback }
            key={ dialog.id }
        />
    )), [userDialogs, selectDialogCallback])

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
                        user={ user }
                        changeNewMessageTextCallback={ changeNewMessageTextCallback }
                        addNewMessageToDialogCallback={ addNewMessageToDialogCallback }
                    />
                    : 'Select dialog' }
            </div>
        </div>
    )
})