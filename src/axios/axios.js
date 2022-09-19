import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://127.0.0.1:5000',
    //baseURL: 'http://localhost:5000',
    //baseURL: 'http://aunadmin-001-site3.dtempurl.com/api',
    headers: {
        headerType: 'example header type'
    }
});
export default instance;