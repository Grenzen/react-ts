import React from "react"
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <img
                className={s.image}
                src="https://img.icons8.com/ios-filled/50/000000/logo.png"
                alt="logo"
            />
            <h1>Такая-то сеть</h1>
        </header>
    )
}