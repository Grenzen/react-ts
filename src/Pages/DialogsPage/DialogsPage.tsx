import React from 'react'
import { ActionType, DialogsTypes, UserTypes } from '../../redux/state'
import { Dialogs } from '../../components/Dialogs/Dialogs'

type PropTypes = {
    dialogs: DialogsTypes
    user: UserTypes
    dispatch: (action: ActionType) => void
}

export const DialogsPage: React.FC<PropTypes> = (
    {
        user,
        dialogs,
        dispatch
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
}