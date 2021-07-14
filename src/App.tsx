import React from 'react'
import { Header } from './components/Header/Header'
import { NavBar } from './components/NavBar/NavBar'
import { Profile } from './components/Profile/Profile'
import './App.css'

// type <CompName>PropsType = {
//     value: number
// }
// function <CompName>(props: <CompName>PropsType) {}

// let b: boolean = true;
// let b = true;

// let b: Array<object | string | number>;
// b = [1, 2, 3, 4, 5];
// b = ['ghg', 'dg', 'fg']
// b = [{}, {}, {}]

export const App = () => {
  return (
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <Profile />
      </div>
  )
}
