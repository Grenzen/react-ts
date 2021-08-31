import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialog.module.css'
import { ActionType, DialogTypes } from '../../../redux/state'
import { selectDialog } from '../../../store/actions/dialogs'

type PropTypes = {
    dialog: DialogTypes
    dispatch: (action: ActionType) => void
}

export const Dialog: React.FC<PropTypes> = (
    {
        dialog, dispatch,
    }) => {
    const itemClassName = `${ s.item }`
    const onClickHandler = () => dispatch(selectDialog(dialog.id))

    return (
        <li
            className={ itemClassName }
            onClick={ onClickHandler }
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
}