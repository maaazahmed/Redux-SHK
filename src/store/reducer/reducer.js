import actionTypes from "../constant/constant"


const INITIAL_STATE = {
    items:[] ,
}




export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.NAME_KEY:
            return ({
                ...state,
                items: [...state.items,action.payload]
            })
        default:
            return state;
    }
}

