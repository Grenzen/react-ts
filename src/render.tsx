import ReactDOM from 'react-dom'
import React from 'react'
import { App } from './App'
import { StateTypes } from './redux/state'


export const rerenderTree = (state: StateTypes) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={ state }
            />
        </React.StrictMode>,
        document.getElementById('root'),
    )
}