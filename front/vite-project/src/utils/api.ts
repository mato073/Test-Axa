import axios from 'axios';


export const api = async (limit: number = 20) => {
    try {
        const url = `http://localhost:3000/stocks`;
        
        const { data: stocks } = await axios.get(url, {
            params: {
                "_limit": limit
            }
        });
        return stocks.reverse();
    } catch (error) {
        console.error("api error", error);
    }
}