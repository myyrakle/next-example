import axios from "axios";
import useSWR from "swr";

export async function fetcher(...args) {
    const response = await axios(...args);
    return response.data;
}

export function getRandom() {
    const { data, error, mutate } = useSWR(
        `http://127.0.0.1:3030/random`,
        fetcher
    );

    return {
        data,
        error,
        isLoading: !error && !data,
        mutate,
    };
}

export async function getItems() {
    const response = await axios.get("http://127.0.0.1:3030/items");
    return response.data;
}

export async function getItem(itemId) {
    const response = await axios.get(`http://127.0.0.1:3030/item/${itemId}`);
    return response.data;
}
