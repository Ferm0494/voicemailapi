
const SHOW_ANCHOR = "SHOW_ANCHOR"
const HIDE_ANCHOR = "HIDE_ANCHOR"
const show_anchor=(event)=>{

     return {type: SHOW_ANCHOR, payload: event}
}
const hide_anchor = {type: HIDE_ANCHOR, payload:null}



export{
    SHOW_ANCHOR,
    HIDE_ANCHOR,
    show_anchor,
    hide_anchor
}