import { useState, useEffect } from "react";

import Chart from "../Chart";
import Datas from "../Datas";

import { api } from "../../utils/api";

import { DataPoint } from '../../types/stock'

import './style.scss';


const Container = () => {
    const [data, setData] = useState<DataPoint[]>([]);
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response: DataPoint[] | 'error' = await api();
            if (response === 'error') {
                setError(true);
                setLoading(false);
                return;
            }
            if (response) {
                setData(response);
                setLoading(false);
            }
        }
        if (!data.length) fetchData();
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