import React from 'react'
import { ActionType, DialogsTypes } from '../../redux/state'
import { Dialogs } from '../../components/Dialogs/Dialogs'

type PropTypes = {
    dialogs: DialogsTypes
    dispatch: (action: ActionType) => void
}

export const DialogsPage: React.FC<PropTypes> = ({ dialogs, dispatch }) => {
    return (
        <>
            <Dialogs
                dialogs={ dialogs }
                dispatch={ dispatch }
            />
        </>
    )
}