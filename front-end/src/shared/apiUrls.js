const PORT  = 8000

export const SERVER_BASE_API = `http://localhost:${PORT}/anytimeFitness/`

// contact forms
export const GET_CONTACTS = `${SERVER_BASE_API}contact/getAll`
export const GET_CONTACT = `${SERVER_BASE_API}contact/get/:id`
export const ADD_CONTACT = `${SERVER_BASE_API}contact/add`
export const UPDATE_CONTACT= `${SERVER_BASE_API}contact/update/:id`
export const DELETE_CONTACT= `${SERVER_BASE_API}contact/delete/:id`

// posts
export const GET_POSTS = `${SERVER_BASE_API}post/getAll`
export const ADD_POST = `${SERVER_BASE_API}post/add`
export const UPDATE_POST= `${SERVER_BASE_API}post/update/:id`
export const DELETE_POST= `${SERVER_BASE_API}post/delete/:id`


// users
export const GET_USERS = `${SERVER_BASE_API}user/getAll`
export const DELETE_USER= `${SERVER_BASE_API}user/delete/:id`
export const UPDATE_USER= `${SERVER_BASE_API}user/update/:id`

// coachs
export const GET_COACHS = `${SERVER_BASE_API}coach/getAll`
export const DELETE_COACH= `${SERVER_BASE_API}coach/delete/:id`
export const UPDATE_COACH= `${SERVER_BASE_API}coach/update/:id`

// bookings
export const GET_BOOKINGS = `${SERVER_BASE_API}booking/getAll`
export const ADD_BOOKING = `${SERVER_BASE_API}booking/add`
export const UPDATE_BOOKING= `${SERVER_BASE_API}booking/update/:id`
export const DELETE_BOOKING= `${SERVER_BASE_API}booking/delete/:id`