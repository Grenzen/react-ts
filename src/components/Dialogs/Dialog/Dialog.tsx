import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialog.module.css'
import { DialogTypes } from "../../../redux/state";

type PropTypes = {
    dialog: DialogTypes
    selectDialogCallback: (id: string) => void
}

export const Dialog:React.FC<PropTypes> = ({ dialog, selectDialogCallback }) => {

    const onClickHandler = () => {
        selectDialogCallback(dialog.id)
    }

    return (
        <li
            className={ s.item }
            onClick={ onClickHandler }
        >
            <NavLink
                className={ s.link }
                to={`/dialogs/${dialog.id}`}
                activeClassName={s.active}
            >
                { dialog.name }
            </NavLink>
        </li>
    )
}