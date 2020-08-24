import {UPDATE_CURRENT_VMBOX} from '../actions/currentVmBox'


const vmBoxCurrentReducerID = (state={},{type,payload})=>{
    switch(type){
        case UPDATE_CURRENT_VMBOX:
            return{
                box: payload
            }
            default:
            return state
    }
}

export default vmBoxCurrentReducerID