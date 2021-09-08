import React from 'react'
import { Dialogs } from '../../components/Dialogs/Dialogs'
import { ActionDialogsType, DialogsType } from '../../store/reducers/dialogs'
import { UserType } from '../../store/reducers/user'

type PropTypes = {
    dialogs: DialogsType
    user: UserType
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