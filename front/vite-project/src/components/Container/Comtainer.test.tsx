import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react';
import * as api from '../../utils/api';

import Container from './index';

jest.mock('../../utils/api');

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