import { combineReducers } from 'redux'
import { postsReducer } from './posts'
import { dialogsReducer } from './dialogs'
import { userReducer } from './user'
import { friendsReducer } from './friends'

export default combineReducers({
    user: userReducer,
    friends: friendsReducer,
    posts: postsReducer,
    dialogs: dialogsReducer,
})