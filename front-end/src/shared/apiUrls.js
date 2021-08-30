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
export const GET_POST = `${SERVER_BASE_API}post/get/:id`
export const ADD_POST = `${SERVER_BASE_API}post/add`
export const UPDATE_POST= `${SERVER_BASE_API}post/update/:id`
export const DELETE_POST= `${SERVER_BASE_API}post/delete/:id`


// users
export const GET_USERS = `${SERVER_BASE_API}user/getAll`
export const DELETE_USER= `${SERVER_BASE_API}user/delete/:id`

// coachs
export const GET_COACHS = `${SERVER_BASE_API}coach/getAll`
export const DELETE_COACH= `${SERVER_BASE_API}coach/delete/:id`

// comments
export const GET_COMMENTS = `${SERVER_BASE_API}comment/getAll`
export const ADD_COMMENT = `${SERVER_BASE_API}comment/add`
export const UPDATE_COMMENT= `${SERVER_BASE_API}comment/update/:id`
export const DELETE_COMMENT= `${SERVER_BASE_API}comment/delete/:id`