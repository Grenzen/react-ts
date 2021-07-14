import React from "react"
import './NavBar.css'

const nav = [
    {id:0, name: 'Profile'},
    {id:1, name: 'Messages'},
    {id:2, name: 'News'},
    {id:3, name: 'Music'},
    {id:4, name: 'Settings'}
]

export const NavBar = () => {
    return (
        <nav className="nav">
            {nav.map((item) => {
                return (
                    <div className="nav__item" key={item.id}>
                        <a className="nav__item-link" href="#h">{ item.name }</a>
                    </div>
                )
            })}
        </nav>
    )
}