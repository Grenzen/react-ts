import React from 'react'
import { ProfileTypes } from '../../redux/state'
import { Profile } from '../../components/Profile/Profile'
import { ActionPostsType } from '../../store/reducers/posts'


type PropTypes = {
    profile: ProfileTypes
    dispatch: (action: ActionPostsType) => void
}

export const ProfilePage: React.FC<PropTypes> = React.memo((
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
})