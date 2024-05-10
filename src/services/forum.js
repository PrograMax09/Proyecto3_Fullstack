import { UNSAFE_useRouteId } from "react-router-dom"
import api from "./config.js"

export const getAllForums = async() => {
    const token = localStorage.getItem("token")
    try {
    const { data } = await api.get("/forum")
    return data
  } catch (error) {
    console.error(error)
    throw new Error('Error getting all Forums')
  }
}

export const createNewComment = async(forumId, comment) => {
  const token = localStorage.getItem("token")
  const userID = localStorage.getItem("id")
  try {
  const { data } = await api.post(`/comment/${forumId}`, {content: comment, userID: userID}, {headers: {Authorization: token}})
  console.log(data)
  return data
} catch (error) {
  console.error(error)
  throw new Error('Error creating new comment')
}
}

export const getAllCommentsFromForum = async(forumId) => {
  const token = localStorage.getItem("token")
  try {
  const { data } = await api.get(`/comment/${forumId}`, {headers: {authorization: token}})
  console.log(data)
  return data
} catch (error) {
  console.error(error)
  throw new Error("Error getting all forum'scomments")
}
}
