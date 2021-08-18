const initState = {
    error: null,
    message: '',
    loading: false
}

export const coachRegisterReducer = (state = initState, action) => {
    switch(action.type){
        case "COACH_REGISTER_REQUEST":
            state = {
                ...state,
                loading: true
            }
            break;
        case "COACH_REGISTER_SUCCESS":
            state = {
                ...state,
                loading: false,
                message: action.payload.message
            }
            break;
        case "COACH_REGISTER_FAILURE":
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
    }

    return state;
}