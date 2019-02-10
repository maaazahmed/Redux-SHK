import actionTypes from "../constant/constant"


export const nameAction = (data) => {
    return dispatch => {
        dispatch({
            type: actionTypes.NAME_KEY,
            payload: data
        })
    }
}
