import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import App from '../App'

test("Renders the App component", () => {
    render(<App />)
    expect(true).toBeTruthy()
})

