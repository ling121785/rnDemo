
import * as type from '../constants/reduxConstants'

export default function login(state, action) {
    switch (action.type) {
        case type.LOGIN_LOADING:
            return {
                status: 'loading'
            }
        case type.LOGIN_SUCCESS:
            return {
                status: 'success',
                info: action.accountInfo
            }
        case type.LOGOUT:
            return {
                status: 'logout'
            }
        default:
            return {}
    }
}


