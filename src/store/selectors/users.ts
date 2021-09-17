import { RootStateType } from '../index'

export const isUsersLoading = (state: RootStateType) => state.users.isUsersLoading
export const isErrors = (state: RootStateType) => state.users.isErrors
export const users = (state: RootStateType) => state.users.users
export const actualPage = (state: RootStateType) => state.users.actualPage