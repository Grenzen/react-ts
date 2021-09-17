import axios from 'axios'
import { UsersType } from '../store/reducers/users'

type UserServerType = {
    name: string
    id: number
    photos: { small: null | string, large: null | string }
    status: null | string
    followed: boolean
}

const BASE_API = 'https://social-network.samuraijs.com/api/1.0/'
export const getUsers = async (page: string) => {
    const { data, status } = await axios.get(`${ BASE_API }users?page=${ page }`)
    const users = data.items.map(mappedUsers)
    return status === 200 && data ? users : null
}

const mappedUsers = (user: UserServerType): UsersType => ({
    userId: user.id,
    userAvatar: user.photos.small,
    userFullName: user.name,
    userStatus: user.status,
    userLocation: null,
    followed: user.followed,
})