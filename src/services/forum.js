import api from "./config.js"

export const getAllForums = async() => {
    const token = localStorage.getItem("token")
    try {
    const { data } = await api.get("/forum")
    return data
  } catch (error) {
    console.error(error)
    throw new Error('Error getting Forums')
  }
}