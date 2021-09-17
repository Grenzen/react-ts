import React, { FormEvent, useEffect, useMemo } from 'react'
import { MapStateToPropsType, MapDispatchToPropsType } from '../../Pages/UsersPage/UsersPage'
import s from './Users.module.css'
import { UsersItem } from './UsersItem/UsersItem'
import { FormButton } from '../FormButton/FormButton'

type UsersPropType = MapStateToPropsType & MapDispatchToPropsType

export const Users: React.FC<UsersPropType> = React.memo((
    {
        isUsersLoading,
        users, changeFollowCallback,
        fetchUsersCallback, clearUsersCallback,
    },
) => {
    useEffect(() => {
        fetchUsersCallback()
        return () => {
            clearUsersCallback()
        }
    }, [fetchUsersCallback, clearUsersCallback])

    const setUsers = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        fetchUsersCallback()
    }
    const mappedUsersItem = useMemo(() => users && users.map(user => (
        <UsersItem
            key={ user.userId }
            user={ user }
            changeFollowCallback={ changeFollowCallback }
        />
    )), [users, changeFollowCallback])

    return <main className={ s.users }>
        <div className={ s.UsersPageContainer }>
            <div className={ s.UsersContainer }>
                { isUsersLoading ? 'Loading...' : mappedUsersItem }
            </div>
            <form onSubmit={ setUsers }>
                <FormButton
                    value={ 'Show more' }
                    primary size={ 'large' }
                    position={ 'center' }
                />
            </form>
        </div>
    </main>
})