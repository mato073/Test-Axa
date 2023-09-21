import { render } from "@testing-library/react";
import Datas from "./index";

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


test('render Datas component without errors', () => {
    const { getByTestId } = render(<Datas data={data} editTableValue={() => { }} />);
    const chartElement = getByTestId('datas');
    expect(chartElement).not.toBeNull();
});

test('execute fake editTableValue function', () => {


})

