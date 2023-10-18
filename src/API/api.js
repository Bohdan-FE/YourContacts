import axios from 'axios';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const signup = async (data) => {
    const respons = await axios.post('/users/signup', data)
    setAuthHeader(respons.data.token);
    return respons.data 
}

export const login = async (data) => {
    const respons = await axios.post('/users/login', data)
    setAuthHeader(respons.data.token);
    return respons.data
}

export const getUser = async () => {
    const respons = await axios('/users/current')
    return respons.data
}

export const getContacts = async () => {
    const resp = await axios('/contacts')
    return resp.data
}

export const addContact = async (contact) => {
    const resp = await axios.post('/contacts', contact)
     return resp.data
}

export const deleteContact = async (id) => {
    const resp = await axios.delete(`/contacts/${id}`)
    return resp.data
}