import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ProfilePage } from './Pages/ProfilePage/ProfilePage'
import { DialogsPage } from './Pages/DialogsPage/DialogsPage'
import { NewsPage } from './Pages/NewsPage/NewsPage'
import { MusicPage } from './Pages/MusicPage/MusicPage'
import { SettingsPage } from './Pages/SettingsPage/SettingsPage'
import { ActionDialogsType, DialogsType } from './store/reducers/dialogs'
import { ActionPostsType, PostsType } from './store/reducers/posts'
import { UserType } from './store/reducers/user'

export const useRoutes = (
    user: UserType,
    posts: PostsType,
    dialogs: DialogsType,
    dispatch: (action: ActionDialogsType | ActionPostsType) => void,
) => {
    return (
        <Switch>
            <Route path="/profile">
                <ProfilePage
                    user={ user }
                    posts={ posts }
                    dispatch={ dispatch }
                />
            </Route>
            <Route path="/dialogs">
                <DialogsPage
                    dialogs={ dialogs }
                    user={ user }
                    dispatch={ dispatch }
                />
            </Route>
            <Route path="/news">
                <NewsPage/>
            </Route>
            <Route path="/music">
                <MusicPage/>
            </Route>
            <Route path="/settings">
                <SettingsPage/>
            </Route>
            <Redirect to="/profile"/>
        </Switch>
    )
}