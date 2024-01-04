import NavBar from "./Navbar";
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";

describe('navbar', () => {
    
    const title = 'Test'

    test('make sure title renders', () => {

        render(<Router><NavBar title={title}></NavBar></Router>)

        const titleElement = screen.getByRole('heading', {
            level: 1
        })
        expect(titleElement).toBeInTheDocument()
        
    })
})