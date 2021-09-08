import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ProfilePage } from './Pages/ProfilePage/ProfilePage'
import { DialogsPage } from './Pages/DialogsPage/DialogsPage'
import { NewsPage } from './Pages/NewsPage/NewsPage'
import { MusicPage } from './Pages/MusicPage/MusicPage'
import { SettingsPage } from './Pages/SettingsPage/SettingsPage'

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/profile">
                <ProfilePage/>
            </Route>
            <Route path="/dialogs">
                <DialogsPage/>
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