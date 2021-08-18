import axios from "axios"

export const signup = (user) => {

    console.log(user)

    return async (dispatch) => {

        dispatch({type: "USER_REGISTER_REQUEST"});
        const res = await axios.post(`http://localhost:8000/anytimeFitness/user/signup`, {
            ...user
        });

        if(res.status === 201){
            const { message } = res.data;
            dispatch({
                type: "USER_REGISTER_SUCCESS",
                payload: {message}
            });
        }else{
            if(res.status === 400){
                dispatch({
                    type: "USER_REGISTER_FAILURE",
                    payload: { error: res.data.error }
                });
            }
        }
    }
}