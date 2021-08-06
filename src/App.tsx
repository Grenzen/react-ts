import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { StateTypes } from './redux/state'
import { useRoutes } from './routes'
import { Header } from './components/Header/Header'
import { NavBar } from './components/NavBar/NavBar'
import './App.css'


export type AppTypes = {
    state: StateTypes
}

export const App:React.FC<AppTypes> = ({ state }) => {
  const { profile, dialogs, navbar } = state
  const routes = useRoutes(profile, dialogs)
  return (
      <Router>
        <div className="app-wrapper">
            <Header />
            <NavBar navbar={ navbar } />
            { routes }
        </div>
      </Router>
  )
}
