import React from 'react'
import s from './UserInfo.module.css'

const user = {
    firstName: 'John',
    lastName: 'Dou',
    surName: '',
    avatar: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/A7E9/production/_118158924_gettyimages-507245091.jpg',
    birthDate: '2 January 2000',
    city: 'Minsk',
    education: 'BSU\'11',
    website: 'https://it-kamasutra.com',
}

export const UserInfo = () => {
    return (
        <div className={s.info}>
            <div className={s.avatar} style={{ backgroundImage: `url(${user.avatar})` }}></div>
            <div className={s.description}>
                <h2 className={`${s.userInfo} ${s.userName}`}>{`${user.firstName} ${user.lastName} ${user.surName}`}</h2>
                <p className={s.userInfo}>{`Date of Birth: ${user.birthDate}`}</p>
                <p className={s.userInfo}>{`City: ${user.city}`}</p>
                <p className={s.userInfo}>{`Education: ${user.education}`}</p>
                <p className={s.userInfo}>Web Site: <a className={s.websiteLink} href={user.website}>{user.website}</a></p>
            </div>
        </div>
    )
}