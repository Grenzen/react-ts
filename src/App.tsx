import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './routes'
import { Header } from './components/Header/Header'
import { NavBar } from './components/NavBar/NavBar'
import './App.css'

export type AppTypes = {
    store: any
}

export const App: React.FC<AppTypes> = (
    {
        store,
    }) => {
    const state = store.default.getState()
    const { user, posts, dialogs, friends } = state
    const routes = useRoutes(user, posts, dialogs, store.default.dispatch.bind(store))
    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <NavBar friends={ friends }/>
                { routes }
            </div>
        </Router>
    )
}
