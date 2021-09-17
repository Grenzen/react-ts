import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './routes'
import { Header } from './components/Header/Header'
import { NavBar } from './components/NavBar/NavBar'
import './App.css'
import { RootStateType } from './store'

export type AppTypes = {
    state: RootStateType
}

export const App: React.FC<AppTypes> = (
    {
        state,
    }) => {
    const { friends } = state
    const routes = useRoutes()
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
