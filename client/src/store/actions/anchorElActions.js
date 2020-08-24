import fetch from "node-fetch"

const SHOW_ANCHOR = "SHOW_ANCHOR"
const SHOW_ANCHOR2 = "SHOW_BOXES"
const HIDE_ANCHOR = "HIDE_ANCHOR"
const HIDE_ANCHOR2 = "HIDE_ANCHOR2"
const show_anchor=(event,mail)=>{
    console.log("SHOW_ANCHORELACTIONS",event)
     return {type: SHOW_ANCHOR,mail,payload:event}
}

const show_anchorBoxes=(event)=>{
    return {type:SHOW_ANCHOR2, payload:event}
}
const hide_anchor = async(folder,message,id)=>{
    let response = await fetch(`${id}/messages`,{
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
    SHOW_ANCHOR2,
    show_anchorBoxes,
    HIDE_ANCHOR,
    HIDE_ANCHOR2,
    show_anchor,
    hide_anchor,
    hide_fast_anchor
}