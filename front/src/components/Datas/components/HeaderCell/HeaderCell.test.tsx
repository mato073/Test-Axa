import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import HeaderCell from './index';

test('renders HeaderCell', () => {
    const { getByTestId } = render(<HeaderCell value='04/08/2023' />);
    const headerCell = getByTestId('header-cell');
    expect(headerCell).toBeInTheDocument();
});

test('on value change, HeaderCell should update', () => {
    const { getByTestId, rerender } = render(<HeaderCell value='04/08/2023' />);
    const headerCell = getByTestId('header-cell');
    expect(headerCell).toHaveTextContent('04/08/2023');
    rerender(<HeaderCell value='04/08/2024' />);
    expect(headerCell).toHaveTextContent('04/08/2024');
})