import axios from 'axios';

const api = axios.create({
    baseURL: 'https://semanaomnistack7backend.herokuapp.com:3333',
});

export default api;
