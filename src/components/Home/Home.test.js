import Home from './Home'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min'

describe('Home render components', () => {
    test('Render componenets', () => {
        render(<Router><Home/></Router>)

        const nameTitle = screen.getByRole('heading', {
            name: 'Brandon Lingo',
            level: 1
        })
        expect(nameTitle).toBeInTheDocument()

        const pSD = screen.getByRole('paragraph')
        expect(pSD).toBeInTheDocument()

        const searchElement = screen.getByRole('textbox1')
        expect(searchElement).toBeInTheDocument()

        const searchButton = screen.getByRole('searchButton')
        expect(searchButton).toBeInTheDocument()

        const aboutLinkElement = screen.getByRole('aboutLink')
        expect(aboutLinkElement).toBeInTheDocument()
    })
})