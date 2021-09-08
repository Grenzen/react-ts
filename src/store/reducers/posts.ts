import * as types from '../types/posts'
import * as postsActions from '../actions/posts'
import clone from 'clone-deep'

export type PostType = {
    id: string
    text: string
    time: Date
    likes: number
}

export type PostsType = {
    userId: string
    newPostText: string
    posts: Array<PostType>
}

export type UpdateNewPostTextType = ReturnType<typeof postsActions.updateNewPostText>
export type AddNewPostType = ReturnType<typeof postsActions.addNewPost>
export type ActionPostsType = AddNewPostType | UpdateNewPostTextType

const initialState: PostsType = {
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
}

export const postsReducer = (state: PostsType = initialState, action: ActionPostsType): PostsType => {
    switch (action.type) {
        case types.ADD_NEW_POST: // добавить новый пост на страницу профиля
            const postsClone = clone(state.posts)
            const newPost = {
                id: action.postId,
                text: state.newPostText,
                time: action.postTime,
                likes: 0,
            }
            state.posts = [newPost, ...postsClone]
            state.newPostText = ''
            return state
        case types.UPDATE_NEW_POST_TEXT: // изменить текст поста на странице профиля
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}