import axios from 'axios';

//process.env.REACT_APP_FIREBASE_API;
const FIREBASE_API = 'https://redux-83bc9-default-rtdb.firebaseio.com'; 

export const Axios= axios.create({
    baseURL: FIREBASE_API,
})