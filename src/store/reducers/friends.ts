export type FriendType = {
    id: string
    name: string
    avatar: string
}

export type FriendsType = {
    [ key: string ]: FriendType
}

const initialState: FriendsType = {
    '0': {
        id: '0',
        name: 'John',
        avatar: 'https://magazine.skyeng.ru/wp-content/uploads/2019/03/shutterstock_745196731.jpg',
    },
    '1': {
        id: '1',
        name: 'Sara',
        avatar: 'https://magazine.skyeng.ru/wp-content/uploads/2019/03/shutterstock_745196731.jpg',
    },
    '2': {
        id: '2',
        name: 'George',
        avatar: 'https://magazine.skyeng.ru/wp-content/uploads/2019/03/shutterstock_745196731.jpg',
    },
    '3': {
        id: '3',
        name: 'Jinny',
        avatar: 'https://magazine.skyeng.ru/wp-content/uploads/2019/03/shutterstock_745196731.jpg',
    },
    '4': {
        id: '4',
        name: 'Harry',
        avatar: 'https://magazine.skyeng.ru/wp-content/uploads/2019/03/shutterstock_745196731.jpg',
    },
}

export const friendsReducer = (state: FriendsType = initialState, action: any): FriendsType => {
    return state
}

