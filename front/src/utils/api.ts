import axios from 'axios';

export const api = async (limit: number = 20) => {
    try {
        const url = `http://localhost:1337/stocks`;

        const { data} = await axios.get(url, {
            params: {
                "_limit": limit
            }
        });
        return data.stocks.reverse();
    } catch (error) {
        console.error("api error", error);
        return "error";
    }
}