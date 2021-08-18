import axios from "axios"

export const signup = (user) => {

    console.log(user)

    return async (dispatch) => {

        dispatch({type: "COACH_REGISTER_REQUEST"});
        const res = await axios.post(`http://localhost:8000/anytimeFitness/coach/signup`, {
            ...user
        });

        if(res.status === 201){
            const { message } = res.data;
            dispatch({
                type: "COACH_REGISTER_SUCCESS",
                payload: {message}
            });
        }else{
            if(res.status === 400){
                dispatch({
                    type: "COACH_REGISTER_FAILURE",
                    payload: { error: res.data.error }
                });
            }
        }
    }
}