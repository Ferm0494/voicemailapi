const HIDE_ANCHOR2 = "HIDE_ANCHOR2"
const SHOW_ANCHOR2 = "SHOW_ANCHOR2"

const hide_anchor2={type: "HIDE_ANCHOR2",payload:null}
const show_anchor2 = (event)=>{
    return{type: SHOW_ANCHOR2,payload: event}
}


export{
    hide_anchor2,
    HIDE_ANCHOR2,
    show_anchor2,
    SHOW_ANCHOR2
}
