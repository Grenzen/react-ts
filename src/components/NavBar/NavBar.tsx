import React from "react"
import { NavbarTypes } from '../../redux/state'
import { NavLink } from 'react-router-dom'
import { FriendItem } from './FriendItem/FriendItem'
import s from './NavBar.module.css'



type NavItemTypes = {
    id: number
    name: string
}
type NavTypes = Array<NavItemTypes>

type PropTypes = {
    navbar: NavbarTypes
}

const nav: NavTypes = [
    {id:0, name: 'Profile'},
    {id:1, name: 'Dialogs'},
    {id:2, name: 'News'},
    {id:3, name: 'Music'},
    {id:4, name: 'Settings'}
]

export const NavBar:React.FC<PropTypes> = ({ navbar }) => {
    const mappedNavigation = nav.map((item) => (
            <div className={ s.item } key={ item.id }>
                <NavLink
                    to={`/${item.name.toLowerCase()}`}
                    className={ s.link }
                    activeClassName={s.active}
                >{ item.name }</NavLink>
            </div>
    ))

    const mappedFriends = Object.values(navbar.friends).map((friend) => (
        <FriendItem
            friend={ friend }
            key={ friend.id }
        />
    ))


    return (
        <nav className={s.nav}>
            { mappedNavigation }
            <div className={s.friendsContainer}>
                { mappedFriends }
            </div>
        </nav>
    )
}