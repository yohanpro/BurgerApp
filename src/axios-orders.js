import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-94370.firebaseio.com/'
});

export default instance;