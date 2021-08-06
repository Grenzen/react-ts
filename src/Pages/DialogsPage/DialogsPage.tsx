import React from 'react'
import { DialogsTypes } from '../../redux/state'
import { Dialogs } from '../../components/Dialogs/Dialogs'

type PropTypes = {
    dialogs: DialogsTypes
}

export const DialogsPage:React.FC<PropTypes> = ({ dialogs }) => {
    const { userDialogs, userMessages } = dialogs
    return (
        <>
            <Dialogs userDialogs={ userDialogs } userMessages={ userMessages }/>
        </>
    )
}