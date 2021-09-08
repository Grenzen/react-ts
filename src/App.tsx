import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './routes'
import { Header } from './components/Header/Header'
import { NavBar } from './components/NavBar/NavBar'
import './App.css'
import { AppDispatch, RootState } from './store'

export type AppTypes = {
    state: RootState
    dispatch: AppDispatch
}

export const App: React.FC<AppTypes> = (
    {
        state,
        dispatch,
    }) => {
    const { user, posts, dialogs, friends } = state
    const routes = useRoutes(user, posts, dialogs, dispatch)
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
