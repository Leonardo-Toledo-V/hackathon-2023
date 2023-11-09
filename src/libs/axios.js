import Axios from 'axios';

const axios = Axios.create({
    maxBodyLength: Infinity,
    baseURL: import.meta.env.VITE_API_KEY,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
    },
});


export default axios;