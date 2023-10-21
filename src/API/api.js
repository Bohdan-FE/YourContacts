import axios from 'axios';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signup = async (data) => {
    const response = await axios.post('/users/signup', data)
    setAuthHeader(response.data.token);
    return response.data 
}

export const login = async (data) => {
    const response = await axios.post('/users/login', data)
    setAuthHeader(response.data.token);
    return response.data
}

export const logout = async () => {
    await axios.post('/users/logout')
    clearAuthHeader()
}

export const getUser = async () => {
    const response = await axios('/users/current')
    return response.data
}

export const refreshUser = async (token) => {
    setAuthHeader(token)
    const response = await axios.get('/users/current')
    return response.data
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