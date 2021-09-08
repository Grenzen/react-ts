import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialog.module.css'
import { DialogType } from '../../../store/reducers/dialogs'

type PropTypes = {
    dialog: DialogType
    selectDialogCallback: (id: string) => void
}

export const Dialog: React.FC<PropTypes> = React.memo((
    {
        dialog, selectDialogCallback,
    }) => {
    const onSelectDialog = () => selectDialogCallback(dialog.id)

    return (
        <li
            className={ s.item }
            onClick={ onSelectDialog }
        >
            <NavLink
                className={ s.link }
                to={ `/dialogs/${ dialog.id }` }
                activeClassName={ s.active }
            >
                { dialog.name }
            </NavLink>
        </li>
    )
})