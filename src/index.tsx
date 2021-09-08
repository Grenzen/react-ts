import './index.css'
import { RootState, store } from './store'
import ReactDOM from 'react-dom'
import React from 'react'
import { App } from './App'

const rerenderTree = (state: RootState) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={ state }
                dispatch={ store.dispatch.bind(store) }
            />
        </React.StrictMode>,
        document.getElementById('root'),
    )
}
rerenderTree(store.getState())
store.subscribe(() => {
    rerenderTree(store.getState())
})