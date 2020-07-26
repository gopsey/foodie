import axios from "axios";

export default axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers: {
        'user-key': '19c44dca390a3b517435140ee48f9be2',
        'Content-Type': 'application/json'
    }
});