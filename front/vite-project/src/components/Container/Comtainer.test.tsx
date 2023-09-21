import '@testing-library/jest-dom'
import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import * as api from '../../utils/api';

import Container from './index';

jest.mock('../../utils/api');

const mockData = [
    {
        timestamp: 1614556800000,
        stocks: '10'
    },
    {
        timestamp: 1614643200000,
        stocks: '20'
    }
]

test('renders loading message initially', () => {
    render(<Container />);
    const loadingElement = screen.getByText('Loading...');
    expect(loadingElement).toBeInTheDocument();
});

test('renders error message if api call fails', async () => {
    (api.api as jest.Mock).mockResolvedValue('error');
    render(<Container />);
    await waitFor(() => {
        const errorElement = screen.getByText('Le service est momentanément indisponible');
        expect(errorElement).toBeInTheDocument();
    });
});

test('renders chart and datas if api call succeeds', async () => {
    (api.api as jest.Mock).mockResolvedValue([]);
    render(<Container />);
    await waitFor(() => {
        const chartElement = screen.getByTestId('chart');
        const datasElement = screen.getByTestId('datas');
        expect(chartElement).toBeInTheDocument();
        expect(datasElement).toBeInTheDocument();
    });
});

test('renders Container and display proper input with value', async () => {
    (api.api as jest.Mock).mockResolvedValue(mockData);
    render(<Container />);
    await waitFor(() => {
        const datasElement = screen.getByTestId('datas');
        expect(datasElement).toBeInTheDocument();
    });
    const inputElements = screen.getAllByTestId('editable-cell-input');

    expect(inputElements[0]).toHaveValue('10');
});

test('State is updated on input blur', async () => {
    (api.api as jest.Mock).mockResolvedValue(mockData);
    render(<Container />);
    await waitFor(() => {
        const datasElement = screen.getByTestId('datas');
        expect(datasElement).toBeInTheDocument();
    });
    const inputElements = screen.getAllByTestId('editable-cell-input');

    expect(inputElements[0]).toHaveValue('10');
    act(() => {
        fireEvent.change(inputElements[0], { target: { value: '20' } });
        inputElements[0].blur();
    })
    expect(inputElements[0]).toHaveValue('20');
})