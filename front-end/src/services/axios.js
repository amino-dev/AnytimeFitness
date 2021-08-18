import axios from 'axios'

export const userLogin = (user) =>
  axios
    .post(`http://localhost:8000/anytimeFitness/user/signin`,{...user})


// export const userSignup = (user) =>
//   axios
//     .post(`http://localhost:8000/anytimeFitness/user/signup`,{...user})


export const coachLogin = (user) =>
    axios
    .post(`http://localhost:8000/anytimeFitness/coach/signin`,{...user})