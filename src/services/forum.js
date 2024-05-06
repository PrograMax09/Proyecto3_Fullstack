import api from "./config.js"

export const getAllForums = async() => {
    const token = localStorage.getItem("token")
    console.log(token)
    try {
    const { data } = await api.get("/forums", {
        headers: {
            Authorization: token
        }
    })
    console.log(data)
    return data
  } catch (error) {
    console.error(error)
    throw new Error('Error getting Forums')
  }
}