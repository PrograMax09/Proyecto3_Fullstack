import api from './config'

export async function login(loginData) {
  try {
    const response = await api.post('/auth/login', loginData)
    console.log(response)
    localStorage.setItem("id", response.data.id)
    return response.data.token
  }
  catch(error) {
    console.log(error)
  }
}