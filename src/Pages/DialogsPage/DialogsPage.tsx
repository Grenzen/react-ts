import React from 'react'
import { Dialogs } from '../../components/Dialogs/Dialogs'
import { DialogsType } from '../../store/reducers/dialogs'
import { UserType } from '../../store/reducers/user'
import { AppDispatch } from '../../store'
import { addNewMessage, selectDialog, updateNewMessageText } from '../../store/actions/dialogs'

type PropTypes = {
    dialogs: DialogsType
    user: UserType
    dispatch: AppDispatch
}

export const DialogsPage: React.FC<PropTypes> = React.memo((
    {
        user,
        dialogs,
        dispatch,
    }) => {
    const selectDialogCallback = (id: string) => dispatch(selectDialog(id))
    const changeNewMessageTextCallback = (newText: string) => dispatch(updateNewMessageText(newText))
    const addNewMessageToDialogCallback = () => dispatch(addNewMessage(user.id))

    return (
        <>
            <Dialogs
                user={ user }
                dialogs={ dialogs }
                selectDialogCallback={ selectDialogCallback }
                changeNewMessageTextCallback={ changeNewMessageTextCallback }
                addNewMessageToDialogCallback={ addNewMessageToDialogCallback }
            />
        </>
    )
})