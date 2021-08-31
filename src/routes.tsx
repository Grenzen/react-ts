import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ProfileTypes, DialogsTypes, ActionType } from './redux/state'
import { ProfilePage } from './Pages/ProfilePage/ProfilePage'
import { DialogsPage } from './Pages/DialogsPage/DialogsPage'
import { NewsPage } from './Pages/NewsPage/NewsPage'
import { MusicPage } from './Pages/MusicPage/MusicPage'
import { SettingsPage } from './Pages/SettingsPage/SettingsPage'

export const useRoutes = (
    profile: ProfileTypes,
    dialogs: DialogsTypes,
    dispatch: (action: ActionType) => void,
) => {
    return (
        <Switch>
            <Route path="/profile">
                <ProfilePage profile={ profile } dispatch={ dispatch }/>
            </Route>
            <Route path="/dialogs">
                <DialogsPage dialogs={ dialogs } dispatch={ dispatch }/>
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