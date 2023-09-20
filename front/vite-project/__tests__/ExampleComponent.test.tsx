import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('ExampleComponent renders correctly', () => {
    render(<App />);
    const textElement = screen.getByText('Hello, world!');
    expect(textElement).toBeInTheDocument();
});