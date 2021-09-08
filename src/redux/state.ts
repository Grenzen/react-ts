import { ActionDialogsType, dialogsReducer, DialogsType } from '../store/reducers/dialogs'
import { ActionPostsType, postsReducer, PostsType } from '../store/reducers/posts'
import { UserType } from '../store/reducers/user'
import { FriendsType } from '../store/reducers/friends'
// TS

type ProfileType = {
    user: UserType
    posts: PostsType
}

type NavbarType = {
    friends: FriendsType
}

type StateType = {
    profile: ProfileType
    dialogs: DialogsType
    navbar: NavbarType
}

type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionDialogsType | ActionPostsType) => void
}

const store: StoreType = {
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
            },

        },
        navbar: {
            friends: {
                '0': {
                    id: '0',
                    name: 'John',
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