import axios from 'axios';

// const baseUrl = 'http://localhost:3000'
const baseUrl = 'https://react-property-finder.herokuapp.com/'

const api = axios.create({
  baseURL: baseUrl
})

//////////AUTH//////////
export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

export const oneUser = async (id) => {
  const resp = await api.get(`/users/${id}`)
  return resp.data
}

export const updateUser = async (id, data) => {
  const resp = await api.put(`/users/${id}`, { user: data })
  return resp.data
}



///////Properties////////

export const createProperty = async (data) => {
  const resp = await api.post('/properties', { property: data })
  return resp.data
}

export const showProperties = async () => {
  const resp = await api.get('/properties')
  return resp.data
}

export const oneProperty = async (id) => {
  const resp = await api.get(`/properties/${id}`)
  return resp.data
}

export const updateProperty = async (id, data) => {
  const resp = await api.put(`/properties/${id}`, { property: data })
  return resp.data
}

export const destroyProperty = async (id) => {
  const resp = await api.delete(`/properties/${id}`)
  return resp.data
}


//////users poperties/////
export const userProperties = async (id) => {
  const resp = await api.get(`/users/${id}/properties`)
  return resp.data
}
