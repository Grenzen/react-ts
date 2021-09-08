import './index.css'
import * as reduxStore from './store/index'
import ReactDOM from 'react-dom'
import React from 'react'
import { App } from './App'

const rerenderTree = (store: any) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                store={ store }
            />
        </React.StrictMode>,
        document.getElementById('root'),
    )
}
rerenderTree(reduxStore)
reduxStore.default.subscribe(() => {
    rerenderTree(reduxStore)
})