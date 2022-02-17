import axios from 'axios';

const clienteApi = axios.create({
    baseURL : process.env.REACT_APP_SERVER_URL
});

export default clienteApi;