import { useState } from "react";
import "./style.scss";

const EditableCell = ({ value, index, editTableValue }:
    {
        value: string,
        index: number,
        editTableValue: (index: number, value: string) => void
    }) => {
    const [inputValue, setInputValue] = useState<string>(value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleBlur = () => {
        editTableValue(index, inputValue);
    }

    return <input
        data-testid="editable-cell-input"
        className="editableCell-input"
        type="text"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
    />
}

export default EditableCell;