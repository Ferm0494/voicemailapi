import {SHOW_ANCHOR,HIDE_ANCHOR} from '../actions/anchorElActions'


const anchorElReducer = (state={},{type,payload})=>{
    switch (type) {
        case SHOW_ANCHOR:
        case HIDE_ANCHOR:
            return{
                anchorEl: payload
            }
          
    
        default:
           return state
    }
}

export default anchorElReducer