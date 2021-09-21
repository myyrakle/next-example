import axios from "axios";

export async function getItems() {
    const response = await axios.get("http://127.0.0.1:3030/items");
    return response.data;
}

export async function getItem(itemId) {
    const response = await axios.get(`http://127.0.0.1:3030/item/${itemId}`);
    return response.data;
}

export async function getRandom() {
    const response = await axios.get(`http://127.0.0.1:3030/random`);
    return response.data;
}
