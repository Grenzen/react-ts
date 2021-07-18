import React from "react"
import { UserInfo } from '../UserInfo/UserInfo'
import { Posts } from '../Posts/Posts'

import s from './Profile.module.css'

const images = {
    background: 'https://cdn.pixabay.com/photo/2018/08/21/23/29/fog-3622519_1280.jpg',
    avatar: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/A7E9/production/_118158924_gettyimages-507245091.jpg'
}

export const Profile = () => {
    return (
        <main className={s.profile}>
            <div className={s.image} style={{ backgroundImage: `url(${images.background})` }}></div>
            <UserInfo />
            <Posts avatar={images.avatar} />
        </main>
    )
}