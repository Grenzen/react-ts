import './index.css'
import { store } from './redux/state'
import ReactDOM from 'react-dom'
import React from 'react'
import { App } from './App'

const rerenderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                store={ store }
            />
        </React.StrictMode>,
        document.getElementById('root'),
    )
}
rerenderTree()
store.subscribe(rerenderTree)