import {SHOW_ANCHOR,HIDE_ANCHOR,SHOW_ANCHOR2,HIDE_ANCHOR2} from '../actions/anchorElActions'


const anchorElReducer = (state={},{type,payload})=>{
    switch (type) {
        case SHOW_ANCHOR:
        case HIDE_ANCHOR:
            return{
                anchorEl: payload
            }
        case HIDE_ANCHOR2:
         case SHOW_ANCHOR2:

         return{
             anchorEl2:payload
         }
        default:
           return state
    }
}

export default anchorElReducer