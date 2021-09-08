// import { v1 } from 'uuid'
// import clone from 'clone-deep'
// import * as postsTypes from '../store/types/posts'
// import * as dialogsTypes from '../store/types/dialogs'
// import * as postsActions from '../store/actions/posts'
// import * as dialogsActions from '../store/actions/dialogs'
import { ActionDialogsType, dialogsReducer } from '../store/reducers/dialogs'
import { ActionPostsType, postsReducer } from '../store/reducers/posts'
// TS
export type UserTypes = {
    id: string
    firstName: string
    lastName: string
    surName: string
    avatar: string
    background: string
    birthDate: string
    city: string
    education: string
    website: string
}

export type PostTypes = {
    id: string
    text: string
    time: Date
    likes: number
}

export type PostsTypes = {
    userId: string
    newPostText: string
    posts: Array<PostTypes>
}

export type ProfileTypes = {
    user: UserTypes
    posts: PostsTypes
}

export type DialogTypes = {
    id: string
    name: string
    avatar: string
}

export type UserMessageTypes = {
    id: string
    message: string
    time: Date
}

export type UsersMessagesTypes = {
    [ key: string ]: Array<UserMessageTypes>
}

export type DialogsTypes = {
    selectedDialog: DialogTypes | null
    selectedMessages: Array<UserMessageTypes> | null
    newMessageText: string
    userDialogs: Array<DialogTypes>
    userMessages: UsersMessagesTypes
}

export type FriendTypes = {
    id: string
    name: string
    avatar: string
}

export type FriendsTypes = {
    [ key: string ]: FriendTypes
}

export type NavbarTypes = {
    friends: FriendsTypes
}

export type StateTypes = {
    profile: ProfileTypes
    dialogs: DialogsTypes
    navbar: NavbarTypes
}

export type StoreType = {
    _state: StateTypes
    _callSubscriber: () => void
    getState: () => StateTypes
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionDialogsType | ActionPostsType) => void
}

// Post Function
export const store: StoreType = {
    _state: {
        profile: {
            user: {
                id: 'cscs',
                firstName: 'John',
                lastName: 'Dou',
                surName: '',
                avatar: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/A7E9/production/_118158924_gettyimages-507245091.jpg',
                background: 'https://st.depositphotos.com/1522993/4737/v/950/depositphotos_47372005-stock-illustration-orange-blue-background-with-triagles.jpg',
                birthDate: '2 January 2000',
                city: 'Minsk',
                education: 'BSU\'11',
                website: 'https://it-kamasutra.com',
            },
            posts: {
                userId: '0',
                newPostText: '',
                posts: [
                    {
                        id: 'ccc',
                        text: 'В новой записи вы решили уточнить точное время дня (а точнее ночи), когда именно была сделана запись. Строку со временем можно оставить просто текстом, но есть вариант получше. В HTML есть специальный тег для разметки даты и времени',
                        time: new Date(`2021-07-18T15:07:55.582Z`),
                        likes: 3,

                    },
                    {
                        id: 'vvv',
                        text: 'Инструменты для статической типизации, такие как Flow или TypeScript, позволяют отлавливать большую часть ошибок ещё до исполнения кода. Кроме того, они существенно улучшают процессы разработки, добавляя автодополнение и другие возможности. Для приложений с большой кодовой базой мы рекомендуем использовать Flow или TypeScript вместо PropTypes.',
                        time: new Date(`2021-07-18T18:07:13.943Z`),
                        likes: 20,
                    },
                    {
                        id: 'lll',
                        text: 'Flow — это библиотека для статической типизации JavaScript, разработанная в Facebook и часто применяемая в связке с React. Flow расширяет возможности JavaScript, добавляя аннотации типов для переменных, функций и React-компонентов.',
                        time: new Date(`2021-07-18T18:38:10.515Z`),
                        likes: 11,
                    },
                ],
            },
        },
        dialogs: {
            selectedDialog: null,
            selectedMessages: null,
            newMessageText: '',
            userDialogs: [
                {
                    id: '0',
                    name: 'John',
                    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                },
                {
                    id: '1',
                    name: 'Sara',
                    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                },
                {
                    id: '2',
                    name: 'George',
                    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                },
                {
                    id: '3',
                    name: 'Jinny',
                    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                },
                {
                    id: '4',
                    name: 'Harry',
                    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                },
            ],
            userMessages: {
                '0': [
                    {
                        id: '0',
                        message: 'Hi',
                        time: new Date(`2021-07-18T18:07:13.943Z`),
                    },
                    {
                        id: 'cscs',
                        message: 'How are you?',
                        time: new Date(`2021-07-18T18:07:13.943Z`),
                    },
                    {
                        id: '0',
                        message: 'What are you doing now?',
                        time: new Date(`2021-07-18T18:07:13.943Z`),
                    },
                ],
                '1': [
                    {
                        id: '1',
                        message: 'Hello',
                        time: new Date(`2021-07-18T18:07:13.943Z`),
                    },
                    {
                        id: 'cscs',
                        message: 'Do you wanna go for walks?',
                        time: new Date(`2021-07-18T18:07:13.943Z`),
                    },
                    {
                        id: '1',
                        message: 'Let\'s meet at five',
                        time: new Date(`2021-07-18T18:07:13.943Z`),
                    },
                ],
                '2': [
                    {
                        id: '2',
                        message: 'Yo',
                        time: new Date(`2021-07-18T18:07:13.943Z`),
                    },
                    {
                        id: 'cscs',
                        message: 'Are you sleeping?',
                        time: new Date(`2021-07-18T18:07:13.943Z`),
                    },
                    {
                        id: '2',
                        message: 'Watch this crazy stuff',
                        time: new Date(`2021-07-18T18:07:13.943Z`),
                    },
                ],
                '3': [
                    {
                        id: '3',
                        message: 'Oh man',
                        time: new Date(`2021-07-18T18:07:13.943Z`),
                    },
                    {
                        id: 'cscs',
                        message: 'You so mad',
                        time: new Date(`2021-07-18T18:07:13.943Z`),
                    },
                    {
                        id: '3',
                        message: 'Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.',
                        time: new Date(`2021-07-18T18:07:13.943Z`),
                    },
                ],
                '4': [
                    {
                        id: '4',
                        message: 'See you later',
                        time: new Date(`2021-07-18T18:07:13.943Z`),
                    },
                    {
                        id: 'cscs',
                        message: 'Don\'t forget about our business',
                        time: new Date(`2021-07-18T18:07:13.943Z`),
                    },
                    {
                        id: '4',
                        message: 'I call you later',
                        time: new Date(`2021-07-18T18:07:13.943Z`),
                    },
                ],
            },

        },
        navbar: {
            friends: {
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
            },
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state was changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer // паттерн наблюдатель
    },

    dispatch(action) {
        this._state.profile.posts = postsReducer(this._state.profile.posts, action as ActionPostsType)
        this._state.dialogs = dialogsReducer(this._state.dialogs, action as ActionDialogsType)
        this._callSubscriber()
    },
}