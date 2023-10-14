import axios from 'axios';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

export const signup = async (data) => {
    const respons = await axios.post('/users/signup', data)
    console.log(respons)
    return respons.data 
}

export const login = async (data) => {
    const respons = axios.post('/users/signup', data)
    return await respons 
}