import React from 'react'
import { ProfileTypes } from '../../redux/state'
import { Profile } from '../../components/Profile/Profile'

type PropTypes = {
    profile: ProfileTypes
}

export const ProfilePage:React.FC<PropTypes> = ({ profile }) => {
   const { user, posts } = profile
    return (
       <>
           <Profile user={ user } posts={ posts } />
       </>
   )
}