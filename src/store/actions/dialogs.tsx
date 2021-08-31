import * as types from '../types/dialogs'

export const selectDialog = (id: string) => ({
    type: types.SELECT_DIALOG,
    id,
} as const)