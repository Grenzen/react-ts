import React, { useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import { FriendItem } from './FriendItem/FriendItem'
import s from './NavBar.module.css'
import { FriendsType } from '../../store/reducers/friends'


type NavItemType = {
    id: number
    name: string
}
type NavType = Array<NavItemType>

type PropType = {
    friends: FriendsType
}

const nav: NavType = [
    { id: 0, name: 'Profile' },
    { id: 1, name: 'Dialogs' },
    { id: 2, name: 'News' },
    { id: 3, name: 'Music' },
    { id: 4, name: 'Settings' },
]

export const NavBar: React.FC<PropType> = React.memo(({ friends }) => {
    const mappedNavigation = useMemo(() => nav.map((item) => (
        <div className={ s.item } key={ item.id }>
            <NavLink
                to={ `/${ item.name.toLowerCase() }` }
                className={ s.link }
                activeClassName={ s.active }
            >{ item.name }</NavLink>
        </div>
    )), [])

    const mappedFriends = useMemo(() => Object.values(friends).map((friend) => (
        <FriendItem
            friend={ friend }
            key={ friend.id }
        />
    )), [friends])


    return (
        <nav className={ s.nav }>
            { mappedNavigation }
            <div className={ s.friendsContainer }>
                { mappedFriends }
            </div>
        </nav>
    )
})