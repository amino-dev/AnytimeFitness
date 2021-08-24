const PORT  = 8000

export const SERVER_BASE_API = `http://localhost:${PORT}/anytimeFitness/`

export const GET_CONTACTS = `${SERVER_BASE_API}contact/getAll`
export const GET_CONTACT = `${SERVER_BASE_API}contact/get/:id`
export const ADD_CONTACT = `${SERVER_BASE_API}contact/add`
export const UPDATE_CONTACT= `${SERVER_BASE_API}contact/update/:id`
export const DELETE_CONTACT= `${SERVER_BASE_API}contact/delete/:id`


export const GET_POSTS = `${SERVER_BASE_API}post/getAll`
export const GET_POST = `${SERVER_BASE_API}post/get/:id`
export const ADD_POST = `${SERVER_BASE_API}post/add`
export const UPDATE_POST= `${SERVER_BASE_API}post/update/:id`
export const DELETE_POST= `${SERVER_BASE_API}post/delete/:id`