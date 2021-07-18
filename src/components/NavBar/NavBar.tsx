import React from "react"
import s from './NavBar.module.css'

const nav = [
    {id:0, name: 'Profile'},
    {id:1, name: 'Messages'},
    {id:2, name: 'News'},
    {id:3, name: 'Music'},
    {id:4, name: 'Settings'}
]

export const NavBar = () => {
    return (
        <nav className={s.nav}>
            {nav.map((item, idx) => {
                return (
                    <div className={idx === 0 ? `${s.item} ${s.active}` : s.item} key={item.id}>
                        <a className={s.link} href="#h">{ item.name }</a>
                    </div>
                )
            })}
        </nav>
    )
}