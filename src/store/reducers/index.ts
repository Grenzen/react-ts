import { combineReducers } from 'redux'
import { postsReducer } from './posts'
import { dialogsReducer } from './dialogs'
import { userReducer } from './user'
import { friendsReducer } from './friends'
import { usersReducer } from './users'

export default combineReducers({
    user: userReducer,
    friends: friendsReducer,
    posts: postsReducer,
    dialogs: dialogsReducer,
    users: usersReducer,
})