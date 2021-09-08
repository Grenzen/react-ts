import React from 'react'
import { Dialogs } from '../../components/Dialogs/Dialogs'
import { DialogsType } from '../../store/reducers/dialogs'
import { UserType } from '../../store/reducers/user'
import { AppDispatch } from '../../store'

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