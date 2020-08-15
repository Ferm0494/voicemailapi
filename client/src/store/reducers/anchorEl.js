import {SHOW_ANCHOR,HIDE_ANCHOR} from '../actions/anchorElActions'


const anchorElReducer = (state={},{type,mail,payload})=>{
    let id = mail;
    switch (type) {
        case SHOW_ANCHOR:
        case HIDE_ANCHOR:
            return{
                anchorEl: {
                    [id]: payload
                }
                
            
            }
       
        default:
           return state
    }
}

export default anchorElReducer