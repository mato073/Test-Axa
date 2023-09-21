import Chart from './index';
import { render } from '@testing-library/react';



test('renders without errors', () => {
    const data = [
        {
            "timestamp": "2023-09-20T15:23:55.637Z",
            "index": 0,
            "stocks": "18.142"
        },
        {
            "timestamp": "2023-09-19T15:23:55.638Z",
            "index": 1,
            "stocks": "15.515"
        }
    ]
    const { getByTestId } = render(<Chart data={data} />);
    const chartElement = getByTestId('chart');
    expect(chartElement).not.toBeNull();
});
