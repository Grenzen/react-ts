import React from 'react'
import { render, screen } from '@testing-library/react'
import { store } from './store'
import { App } from './App'

test('renders learn react link', () => {
    render(<App state={ store.getState() } dispatch={ store.dispatch.bind(store) }/>)
    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
})
