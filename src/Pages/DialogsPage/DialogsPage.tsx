import React from 'react'
import { DialogsTypes, UserTypes } from '../../redux/state'
import { Dialogs } from '../../components/Dialogs/Dialogs'
import { ActionDialogsType } from '../../store/reducers/dialogs'

type PropTypes = {
    dialogs: DialogsTypes
    user: UserTypes
    dispatch: (action: ActionDialogsType) => void
}

export const DialogsPage: React.FC<PropTypes> = React.memo((
    {
        user,
        dialogs,
        dispatch,
    }) => {
    return (
        <>
            <Dialogs
                user={ user }
                dialogs={ dialogs }
                dispatch={ dispatch }
            />
        </>
    )
})