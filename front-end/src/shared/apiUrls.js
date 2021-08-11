const PORT  = 8000

export const SERVER_BASE_API = `http://localhost:${PORT}/anytimeFitness/`

export const GET_CONTACTS = `${SERVER_BASE_API}contact/getAll`
export const GET_CONTACT = `${SERVER_BASE_API}contact/get/:id`
export const ADD_CONTACT = `${SERVER_BASE_API}contact/add`
export const UPDATE_CONTACT= `${SERVER_BASE_API}contact/update/:id`
export const DELETE_CONTACT= `${SERVER_BASE_API}contact/delete/:id`