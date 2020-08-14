import fetch from "node-fetch"

const SHOW_ANCHOR = "SHOW_ANCHOR"
const HIDE_ANCHOR = "HIDE_ANCHOR"
const show_anchor=(event)=>{

     return {type: SHOW_ANCHOR, payload: event}
}
const hide_anchor = async(folder,message)=>{

    
    let response = await fetch('/messages',{
        method: "PATCH",
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({folder,message})
    })
    
   return  {type: HIDE_ANCHOR, payload:null}
}

const hide_fast_anchor = {type: HIDE_ANCHOR, payload:null}



export{
    SHOW_ANCHOR,
    HIDE_ANCHOR,
    show_anchor,
    hide_anchor,
    hide_fast_anchor
}