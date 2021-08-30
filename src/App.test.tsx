import React from 'react'
import { render, screen } from '@testing-library/react'
import { store } from './redux/state'
import { App } from './App'

test('renders learn react link', () => {
    render(<App store={ store }/>)
    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
})
