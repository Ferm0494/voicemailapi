import {HIDE_ANCHOR2,SHOW_ANCHOR2} from '../actions/anchorElActions'

const anchorElReducer = (state={},{type,payload})=>{
    switch (type) {
        
        case HIDE_ANCHOR2:
         case SHOW_ANCHOR2:

         return{
             anchorEl:payload
         }
        default:
           return state
    }
}


export default anchorElReducer