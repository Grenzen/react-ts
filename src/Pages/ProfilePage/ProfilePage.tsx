import React from 'react'
import { ActionType, ProfileTypes } from '../../redux/state'
import { Profile } from '../../components/Profile/Profile'


type PropTypes = {
    profile: ProfileTypes
    dispatch: (action: ActionType) => void
}

export const ProfilePage: React.FC<PropTypes> = (
    {
        profile, dispatch,
    }) => {
    const { user, posts } = profile
    return (
        <>
            <Profile
                user={ user }
                posts={ posts }
                dispatch={ dispatch }
            />
        </>
    )
}