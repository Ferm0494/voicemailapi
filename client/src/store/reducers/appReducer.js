import {ON,OFF} from '../actions/appActions'

const appReducer = (state={},{type,payload})=>{
    switch (type) {
        case OFF:
        case ON:
            return {isLoading: payload}

    
        default:
            return state
    }
}

export default appReducer