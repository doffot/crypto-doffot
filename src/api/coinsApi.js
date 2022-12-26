import axios from "axios";

export const coinsApi = axios.create({
    baseURL:'https://api.coingecko.com/api/v3/'
});