import React from 'react'
import { UserTypes } from '../../../redux/state'
import s from './UserInfo.module.css'
import {Avatar} from "../../Avatar/Avatar";



type PropTypes = {
    user: UserTypes
}

export const UserInfo:React.FC<PropTypes> = ({ user }) => {
    const {
        avatar,
        firstName,
        lastName,
        surName,
        birthDate,
        city,
        education,
        website
    } = user
    return (
        <div className={ s.info }>
            <Avatar avatarUrl={ avatar } shape='square' size='large' />
            <div className={ s.description }>
                <h2 className={ `${s.userInfo} ${s.userName}` }>{`${ firstName } ${ lastName } ${ surName }`}</h2>
                <p className={ s.userInfo }>{ `Date of Birth: ${ birthDate }` }</p>
                <p className={ s.userInfo }>{ `City: ${ city }` }</p>
                <p className={ s.userInfo }>{ `Education: ${ education }` }</p>
                <p className={ s.userInfo }>Web Site: <a className={ s.websiteLink } href={ website }>{ website }</a></p>
            </div>
        </div>
    )
}