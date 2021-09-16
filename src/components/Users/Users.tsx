import React, { FormEvent } from 'react'
import { MapStateToPropsType, MapDispatchToPropsType } from '../../Pages/UsersPage'
import s from './Users.module.css'
import { UsersItem } from './UsersItem/UsersItem'
import { FormButton } from '../FormButton/FormButton'

type UsersPropType = MapStateToPropsType & MapDispatchToPropsType

export const Users: React.FC<UsersPropType> = React.memo((
    {
        users, changeFollowCallback, setUsersCallback,
    },
) => {
    const setUsers = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }
    const mappedUsersItem = users.map(user => (
        <UsersItem
            key={ user.userId }
            user={ user }
            changeFollowCallback={ changeFollowCallback }
        />
    ))
    return <main className={ s.users }>
        <div className={ s.UsersPageContainer }>
            <div className={ s.UsersContainer }>
                { mappedUsersItem }
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