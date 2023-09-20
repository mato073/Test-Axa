import React from 'react';

import EditableCell from './components/EditableCell';

import { DataPoint } from '../../types/stock';

import './style.scss'

interface DatasProps {
    data: DataPoint[]
    editTableValue: (index: number, value: string) => void
}

const Datas = React.memo(({ data, editTableValue }: DatasProps) => {

    const editTableValueCallback = React.useCallback((index: number, value: string) => {
        editTableValue(index, value)
    }, [editTableValue])


    return (
        <div className='datas'>
            <div>
                <table >
                    <tr>
                        {data.map((d, i) => {
                            const date = new Date(d.timestamp)
                            const formattedDate = `${date.getDate() + 1}/${date.getMonth()}/${date.getFullYear()}`
                            return <td key={i}>{formattedDate}</td>
                        })}
                    </tr>
                    <tr>
                        {data.map((d, i) => {
                            return <td key={i}>
                                <EditableCell value={d.stocks} index={i} editTableValue={editTableValueCallback} />
                            </td>
                        }
                        )}
                    </tr>
                </table>
            </div>
        </div>
    )
})

export default Datas;