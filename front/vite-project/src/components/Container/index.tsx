import React from "react";

import Chart from "../Chart";
import Datas from "../Datas";

import { api } from "../../utils/api";

import { DataPoint } from '../../types/stock'

import './style.scss';


const Container = () => {
    const [data, setData] = React.useState<DataPoint[]>([]);
    const [error, setError] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response: DataPoint[] = await api();
            if (response) {
                setData(response);
                setLoading(false);
            } else {
                setError(true);
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    const editTableValue = (index: number, value: string) => {
        const newData = [...data];
        if (!Number(value)) return;
        newData[index].stocks = value;
        setData(() => newData);
    }


    return <div className="container">
        {loading ?
            <div className="loading">
                <div>Loading...</div>
            </div>
            :
            error ?
                <div className="error">Le service est momentanément indisponible</div>
                :
                <>
                    <Chart data={data} />
                    <Datas data={data} editTableValue={editTableValue} />
                </>
        }
    </div>
}

export default Container;