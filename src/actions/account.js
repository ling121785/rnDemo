
import * as type from '../constants/reduxConstants'
export function login(account, pwd) {
    return dispatch => {
        dispatch({
            type: type.LOGIN_LOADING
        })
        setTimeout(() => {
            dispatch({
                type: type.LOGIN_SUCCESS,
                accountInfo: {
                    account: '15396005445',
                    pwd: '123456'
                }
            })
        }, 2000)
    }

}

export function logout() {
    return {
        type: type.LOGOUT
    }
}