import React, { FormEvent } from 'react'
import s from './UsersItem.module.css'
import { Avatar } from '../../Avatar/Avatar'
import { FormButton } from '../../FormButton/FormButton'
import { UsersType } from '../../../store/reducers/users'

type UsersItemType = {
    user: UsersType
    changeFollowCallback: (userId: string, followed: boolean) => void
}

export const UsersItem: React.FC<UsersItemType> = React.memo((
    {
        user, changeFollowCallback,
    },
) => {
    const changeFollow = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        changeFollowCallback(user.userId, user.followed)
    }
    return <div className={ s.userItemContainer }>
        <div className={ s.followContainer }>
            <Avatar
                size={ 'medium' }
                shape={ 'round' }
                avatarUrl={ user.userAvatar }
            />
            <form
                onSubmit={ changeFollow }
            >
                <FormButton
                    value={ user.followed ? 'Unfollow' : 'Follow' }
                    size={ 'medium' }
                    position={ 'center' }
                    primary={ !user.followed }
                />
            </form>
        </div>
        <div className={ s.userInfoContainer }>
            <h3 className={ s.userInfoFullName }>{ user.userFullName }</h3>
            <p className={ s.userInfoStatus }>{ user.userStatus }</p>
        </div>
        <div className={ s.userLocationContainer }>
            <p className={ s.userLocationCountry }>{ user.userLocation.country }</p>
            <p className={ s.userLocationCity }>{ user.userLocation.city }</p>
        </div>
    </div>
})