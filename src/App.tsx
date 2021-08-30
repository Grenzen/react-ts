import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { StoreType } from './redux/state'
import { useRoutes } from './routes'
import { Header } from './components/Header/Header'
import { NavBar } from './components/NavBar/NavBar'
import './App.css'

export type AppTypes = {
    store: StoreType
}

export const App: React.FC<AppTypes> = (
    {
        store,
    }) => {
    const state = store.getState()
    const { profile, dialogs, navbar } = state
    const routes = useRoutes(profile, dialogs, store.dispatch.bind(store))
    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <NavBar navbar={ navbar }/>
                { routes }
            </div>
        </Router>
    )
}
