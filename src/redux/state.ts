import { v1 } from 'uuid'
import clone from 'clone-deep'
import * as postsTypes from '../store/types/posts'
import * as dialogsTypes from '../store/types/dialogs'
import * as postsActions from '../store/actions/posts'
import * as dialogsActions from '../store/actions/dialogs'
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
}

export type UserMessageTypes = {
    id: string
    avatar: string
    message: string
    time: string
}

export type UsersMessagesTypes = {
    [ key: string ]: { messages: Array<UserMessageTypes> }
}

export type DialogsTypes = {
    selectedDialog: string | null
    selectedMessages: { messages: Array<UserMessageTypes> } | null
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

export type UpdateNewPostTextType = ReturnType<typeof postsActions.updateNewPostText>
export type AddNewPostType = ReturnType<typeof postsActions.addNewPost>
export type SelectDialogType = ReturnType<typeof dialogsActions.selectDialog>
export type ActionType = AddNewPostType | UpdateNewPostTextType | SelectDialogType

export type StoreType = {
    _state: StateTypes
    _callSubscriber: () => void
    getState: () => StateTypes
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
}

// Post Function
export const store: StoreType = {
    _state: {
        profile: {
            user: {
                id: '0',
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
            userDialogs: [
                {
                    id: '0',
                    name: 'John',
                },
                {
                    id: '1',
                    name: 'Sara',
                },
                {
                    id: '2',
                    name: 'George',
                },
                {
                    id: '3',
                    name: 'Jinny',
                },
                {
                    id: '4',
                    name: 'Harry',
                },
            ],
            userMessages: {
                '0': {
                    messages: [
                        {
                            id: v1(),
                            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                            message: 'Hi',
                            time: '22:00',
                        },
                        {
                            id: v1(),
                            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                            message: 'How are you?',
                            time: '22:01',
                        },
                        {
                            id: v1(),
                            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                            message: 'What are you doing now?',
                            time: '22:02',
                        },
                    ],
                },
                '1': {
                    messages: [
                        {
                            id: v1(),
                            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                            message: 'Hello',
                            time: '22:00',
                        },
                        {
                            id: v1(),
                            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                            message: 'Do you wanna go for walks?',
                            time: '22:01',
                        },
                        {
                            id: v1(),
                            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                            message: 'Let\'s meet at five',
                            time: '22:02',
                        },
                    ],
                },
                '2': {
                    messages: [
                        {
                            id: v1(),
                            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                            message: 'Yo',
                            time: '22:00',
                        },
                        {
                            id: v1(),
                            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                            message: 'Are you sleeping?',
                            time: '22:01',
                        },
                        {
                            id: v1(),
                            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                            message: 'Watch this crazy stuff',
                            time: '22:02',
                        },
                    ],
                },
                '3': {
                    messages: [
                        {
                            id: v1(),
                            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                            message: 'Oh man',
                            time: '22:00',
                        },
                        {
                            id: v1(),
                            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                            message: 'You so mad',
                            time: '22:01',
                        },
                        {
                            id: v1(),
                            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                            message: 'Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.',
                            time: '22:02',
                        },
                    ],
                },
                '4': {
                    messages: [
                        {
                            id: v1(),
                            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                            message: 'See you later',
                            time: '22:00',
                        },
                        {
                            id: v1(),
                            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                            message: 'Don\'t forget about our business',
                            time: '22:01',
                        },
                        {
                            id: v1(),
                            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                            message: 'I call you later',
                            time: '22:02',
                        },
                    ],
                },
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
        switch (action.type) {
            case postsTypes.ADD_NEW_POST: // добавить новый пост на страницу профиля
                const postsClone = clone(this._state.profile.posts.posts)
                const newPost = {
                    id: v1(),
                    text: this._state.profile.posts.newPostText,
                    time: new Date(),
                    likes: 0,
                }
                this._state.profile.posts.posts = [newPost, ...postsClone]
                this._state.profile.posts.newPostText = ''
                this._callSubscriber()
                break
            case postsTypes.UPDATE_NEW_POST_TEXT: // изменить текст поста на странице профиля
                this._state.profile.posts.newPostText = action.newText
                this._callSubscriber()
                break
            case dialogsTypes.SELECT_DIALOG: // выбрать диалог
                const messagesClone = clone(this._state.dialogs.userMessages[ action.id ])
                this._state.dialogs.selectedMessages = messagesClone
                this._state.dialogs.selectedDialog = action.id
                this._callSubscriber()
        }
    },
}