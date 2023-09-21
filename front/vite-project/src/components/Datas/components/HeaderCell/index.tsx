import { memo } from 'react';
interface HeaderCellProps {
    value: string
}

const HeaderCell = memo(({ value }: HeaderCellProps) => {
    return <span data-testid="header-cell">{value}</span>
});

export default HeaderCell;