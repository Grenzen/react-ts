import React from 'react'
import { Dialogs } from '../../components/Dialogs/Dialogs'
import { addNewMessage, selectDialog, updateNewMessageText } from '../../store/actions/dialogs'
import { UserType } from '../../store/reducers/user'
import { RootStateType } from '../../store'
import { DialogsType } from '../../store/reducers/dialogs'
import { connect } from 'react-redux'

export type MapStatePropType = {
    user: UserType
    dialogs: DialogsType
}

export type MapDispatchPropType = {
    selectDialogCallback: (dialogId: string) => void
    changeNewMessageTextCallback: (newText: string) => void
    addNewMessageToDialogCallback: (userId: string) => void
}

const mapStateToProps = (state: RootStateType): MapStatePropType => {
    return {
        user: state.user,
        dialogs: state.dialogs,
    }
}

const mapDispatchToProps = (dispatch: any): MapDispatchPropType => {
    return {
        selectDialogCallback: (dialogId: string) => dispatch(selectDialog(dialogId)),
        changeNewMessageTextCallback: (newText: string) => dispatch(updateNewMessageText(newText)),
        addNewMessageToDialogCallback: (userId) => dispatch(addNewMessage(userId)),
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export const DialogsPage = React.memo(() => <DialogsContainer/>)