import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import EditableCell from './index';

test('should call editTableValue with the correct arguments on blur', () => {
    const mockEditTableValue = jest.fn();
    const index = 0;
    const initialValue = '19.34';

    const { getByDisplayValue } = render(
        <EditableCell value={initialValue} index={index} editTableValue={mockEditTableValue} />
    );

    const inputElement = getByDisplayValue(initialValue);

    fireEvent.change(inputElement, { target: { value: 'New Value' } });
    fireEvent.blur(inputElement);

    expect(mockEditTableValue).toHaveBeenCalledWith(index, 'New Value');
});

test('should update the input value on change', () => {
    const mockEditTableValue = jest.fn();
    const index = 0;
    const initialValue = '19.34';

    const { getByDisplayValue } = render(
        <EditableCell value={initialValue} index={index} editTableValue={mockEditTableValue} />
    );

    const inputElement = getByDisplayValue(initialValue);

    fireEvent.change(inputElement, { target: { value: '22.33' } });

    expect(inputElement).toHaveValue('22.33');
});
